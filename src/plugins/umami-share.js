(function (global) {
    const cacheKey = 'umami-share-cache';
    const cacheTTL = 3600_000; // 1h

    /**
     * 获取网站统计数据
     * @param {string} baseUrl - Umami Cloud API基础URL
     * @param {string} apiKey - API密钥
     * @param {string} websiteId - 网站ID
     * @returns {Promise<object>} 网站统计数据
     */
    async function fetchWebsiteStats(baseUrl, apiKey, websiteId) {
        // 检查缓存
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            try {
                const parsed = JSON.parse(cached);
                if (Date.now() - parsed.timestamp < cacheTTL) {
                    return parsed.value;
                }
            } catch {
                localStorage.removeItem(cacheKey);
            }
        }

        const currentTimestamp = Date.now();
        // 使用正确的API端点：/api/websites/{id}/stats
        const statsUrl = `${baseUrl}/api/websites/${websiteId}/stats?startAt=0&endAt=${currentTimestamp}`;

        try {
            const res = await fetch(statsUrl, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`API请求失败: ${res.status} - ${errorText}`);
            }

            const stats = await res.json();

            // 缓存结果
            localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), value: stats }));

            return stats;
        } catch (error) {
            console.error('Umami API请求错误:', error);
            throw error;
        }
    }

    /**
     * 获取特定页面的统计数据
     * @param {string} baseUrl - Umami Cloud API基础URL
     * @param {string} apiKey - API密钥
     * @param {string} websiteId - 网站ID
     * @param {string} urlPath - 页面路径
     * @param {number} startAt - 开始时间戳
     * @param {number} endAt - 结束时间戳
     * @returns {Promise<object>} 页面统计数据
     */
    async function fetchPageStats(baseUrl, apiKey, websiteId, urlPath, startAt = 0, endAt = Date.now()) {
        // 使用正确的API端点：/api/websites/{id}/stats
        const statsUrl = `${baseUrl}/api/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}&url=${encodeURIComponent(urlPath)}`;

        try {
            const res = await fetch(statsUrl, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`API请求失败: ${res.status} - ${errorText}`);
            }

            return await res.json();
        } catch (error) {
            console.error('Umami API请求错误:', error);
            throw error;
        }
    }

    /**
     * 获取 Umami 网站统计数据
     * @param {string} baseUrl - Umami Cloud API基础URL
     * @param {string} apiKey - API密钥
     * @param {string} websiteId - 网站ID
     * @returns {Promise<object>} 网站统计数据
     */
    global.getUmamiWebsiteStats = async function (baseUrl, apiKey, websiteId) {
        try {
            return await fetchWebsiteStats(baseUrl, apiKey, websiteId);
        } catch (err) {
            throw new Error(`获取Umami统计数据失败: ${err.message}`);
        }
    };

    /**
     * 获取特定页面的 Umami 统计数据
     * @param {string} baseUrl - Umami Cloud API基础URL
     * @param {string} apiKey - API密钥
     * @param {string} websiteId - 网站ID
     * @param {string} urlPath - 页面路径
     * @param {number} startAt - 开始时间戳（可选）
     * @param {number} endAt - 结束时间戳（可选）
     * @returns {Promise<object>} 页面统计数据
     */
    global.getUmamiPageStats = async function (baseUrl, apiKey, websiteId, urlPath, startAt, endAt) {
        try {
            return await fetchPageStats(baseUrl, apiKey, websiteId, urlPath, startAt, endAt);
        } catch (err) {
            throw new Error(`获取Umami页面统计数据失败: ${err.message}`);
        }
    };

    global.clearUmamiShareCache = function () {
        localStorage.removeItem(cacheKey);
    };
})(window);