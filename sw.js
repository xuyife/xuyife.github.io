/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/24/介绍-第一篇文章/index.html","470e984bf77b1bc6d58d99a97cb04d43"],["/2023/12/29/一个ISO安装多个Windows版本-合成自定义Windows安装ISO/1.png","9e711783a371eba5a00c6b388455aef4"],["/2023/12/29/一个ISO安装多个Windows版本-合成自定义Windows安装ISO/2.png","2c2bf92745e77d35dd9a92cd1e98ec7a"],["/2023/12/29/一个ISO安装多个Windows版本-合成自定义Windows安装ISO/index.html","85cfcf084b2bc26c3cb334aef1979011"],["/2024/04/04/震惊！！！国内超快速github镜像停止服务！/index.html","972f3459d859c5c88625c547e3bda6f2"],["/404.html","379d721a6712f09c8fbc6096f83433d5"],["/Game/index.html","798df2f549f41f8c6f1b2dd756c4b927"],["/about/index.html","6d5d5157afc4244c6c07d38d037a0e02"],["/analytics/index.html","e18d8b0a252a719b1783b15f50291f11"],["/archives/2023/12/index.html","d09256822891d8e8fe9e5a029304d34a"],["/archives/2023/index.html","f84035f38ad3b5363b9c5f79f090cb40"],["/archives/2024/04/index.html","58bc59a1389d4d29a2eaf426a92a99fb"],["/archives/2024/index.html","3f912dfa44e7ec2203f188a5275524af"],["/archives/index.html","f3d1969a847c6905bab91528be5e7094"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Github/index.html","d442d9c1745e61bc431b3d925e29dc2d"],["/categories/Github/加速/index.html","b4be9a9210d03f2003542a9333a0e712"],["/categories/Windows/index.html","2f4bea11bcb8c27f409e3a0a35ec3e58"],["/categories/index.html","5f2230f6be50761b12436292dab46d23"],["/categories/关于我/index.html","c8ab437d43557599204274a0e9605ca7"],["/css/clipboard.css","2c2589bab50d0e5ecf63dc14ae7d6ab6"],["/css/custom.css","b8cd8e7f74df6aa243969e63d698e778"],["/css/fonts/remixicon.css","ee7dda710dee5e369197669c74b844f8"],["/css/fonts/remixicon.eot","e4e1729baa2a0fedccd57007b0191711"],["/css/fonts/remixicon.svg","8ba8903d18582200e63988d1f8c532e1"],["/css/fonts/remixicon.ttf","d53d618eb492c6007beb3507b14010e8"],["/css/fonts/remixicon.woff","9ae2ab3fc48826241f04f254b877c6dd"],["/css/fonts/remixicon.woff2","454eaccf06aeb6c6a9d3cb828461cc54"],["/css/xyfBlogTitle.css","8195465d31101ac7349c19cabb30b304"],["/dist/main.css","78d93a2d3714241aa7809391de2c8227"],["/dist/main.js","dd512cd7c6ecab7f5525a4b959e221da"],["/images/404.jpg","e7696112aabfca9ce195460cb4aea575"],["/images/alipay.jpg","1c4187c0d089c41cb99c4e2d7bdd73ea"],["/images/ayer-side.svg","39cc3c7b38c44aa1e684669ed293ba2f"],["/images/ayer.png","44a252c2fb8457d5f964ff6103ea14d2"],["/images/ayer.svg","e3048361cbdfc5f6c63c20cec06194f4"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/cover1.jpg","81db5164c09c53ac17152c071578111d"],["/images/cover2.jpg","135c931e786d1e1fe59ab1343cf910fa"],["/images/cover3.jpg","7c084b950a063b068e63c683ce010108"],["/images/cover4.jpg","cb0e1f1d738c3f5ae35c8b88417dc489"],["/images/cover5.jpg","b576b03ae35fa56bb36d260a6263a356"],["/images/cover6.jpg","8a1e50868dd4b77bfcd57c4c1425ec39"],["/images/cover7.jpg","93e1effda9ad8fa54d0af6d50d2bc7a1"],["/images/forkme.png","1602c2655c8405454e580e2e4c0ab4a0"],["/images/gitee.png","6b358815f7685c4f03cf93a01d9a5f4b"],["/images/github.png","01d69a8ca1802df9484b1d8c767c3ebe"],["/images/hexo-tag-chart.png","d2e9137216a7bd5f92f119687130edf7"],["/images/hexo.png","7dff06813781773fb9ec8611137b58c3"],["/images/sponsor.jpg","5f9c63ed90e3171cf96ce8b0c02c1b2b"],["/images/wechat.jpg","585dfb22345b5a41a6c612b6a8b3ebfe"],["/index.html","742e5043eb27b2a3de96acd93fdf9574"],["/info/index.html","19b6148626c2550ea15f2061f7c7add1"],["/js/FunnyTitle.js","296db79d51079d8d22b16f4a64facd56"],["/js/busuanzi-2.3.pure.min.js","e847af6da4d5adc5b23924d3421a5ccf"],["/js/clickBoom1.js","9e938acb4d4f598b6040b302950de4c9"],["/js/clickBoom2.js","67c2bb126b359a4f7d2c832b3608de01"],["/js/clickLove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/dz.js","d05b50b79133042302661bfb69f745a7"],["/js/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/js/lazyload.min.js","16b486c05843a4dc4e9cd4295ca699c2"],["/js/search.js","e3e624b549ce5c7c7498a6f95c34692e"],["/js/tocbot.min.js","c4536ea3bf2e39818cfd27b73bfe397f"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/playlist/index.html","f55c3d7056441b1b2c88fbf9a8516307"],["/shuoshuo/index.html","329f6d104e09a22a2e115537f11966bf"],["/sw-register.js","1484bc5c97440c94e7509250a88a873d"],["/tags/Gtihub/index.html","bae4d7cc5f5aeea7de539279149c69a6"],["/tags/ISO/index.html","76746e7fcb5340b1f6f9b47006cd6a8b"],["/tags/SwitchHosts/index.html","2438a761a6ac531283e25654401d0655"],["/tags/Watt-Toolkit/index.html","df625d71ba78506df241838d6841a386"],["/tags/Windows/index.html","a8ecf36d680987c6effec87fcdbef899"],["/tags/githubfast-com/index.html","3df60e1cecf83a43aa56af663ea665d4"],["/tags/hexo/index.html","1a5687419cb3e0efafdf42374dfcc240"],["/tags/index.html","9ca70c14412d3d5c5cd20668d1e35f05"],["/tags/加速/index.html","8d1d9a7961b1c2fbeda7029e0c8f2b1c"],["/tags/博客/index.html","fe8f0e9e53aad724b0c95e5927654de1"],["/tags/安装/index.html","5c1e8c47c15c10b21a4383eb9fa6c23d"],["/tags/开发者/index.html","bed265c5cfba0709fe11f3e4526edb1d"],["/tags/系统/index.html","80a718a7bb9f27462def624007cc48c1"],["/tags/自我介绍/index.html","126d0dd25d9b3c86f0bea6ea5a07e7f9"],["/tools/index.html","f4a02c0321117c296220248875ae59ef"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
