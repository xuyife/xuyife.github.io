/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/24/jie-shao-di-yi-pian-wen-zhang/index.html","26e167270e5025f1b25f169a6619d6ac"],["/2023/12/29/yi-ge-iso-an-zhuang-duo-ge-windows-ban-ben-he-cheng-zi-ding-yi-windows-an-zhuang-iso/1.png","303f6346d6e30e22e563dd245fd3e609"],["/2023/12/29/yi-ge-iso-an-zhuang-duo-ge-windows-ban-ben-he-cheng-zi-ding-yi-windows-an-zhuang-iso/2.png","a13c29d7dfe3defbe19d210bcb80b810"],["/2023/12/29/yi-ge-iso-an-zhuang-duo-ge-windows-ban-ben-he-cheng-zi-ding-yi-windows-an-zhuang-iso/index.html","d365fc404cb63da50d207e301caa8d66"],["/2024/04/04/zhen-liang-guo-nei-chao-kuai-su-github-jing-xiang-ting-zhi-fu-wu/index.html","bc3897901337ae526ba2e3e49fa8089f"],["/2024/06/10/ruan-jian-fen-xiang-zi-zhi-zheng-gu-shen-qi-ying-pan-zhong-jie-zhe/index.html","81ea8813af2c501d41577c83e77c64f5"],["/404.html","379d721a6712f09c8fbc6096f83433d5"],["/Game/index.html","034d91c666ffe508752704ec93969b8b"],["/about/index.html","888aa8aa2c21fe2d46b1019de8d16f67"],["/analytics/index.html","a8618d6a6c39da03f53c74606575fa39"],["/archives/2023/12/index.html","f61ee727926ef2ca124a98a776ff97f6"],["/archives/2023/index.html","cfc034308cc7a42160e93ee3d4b58875"],["/archives/2024/04/index.html","783d19c1131b4c653ff814167299ce2f"],["/archives/2024/06/index.html","44f0fa2cb5e053fbb05a6df94ae93360"],["/archives/2024/index.html","719ab2e174ec13cc5a3ddd4097b8cc37"],["/archives/index.html","92780223b6cd6a03242e500858a76a8f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Github/index.html","df213d44d13f80b6e83f319104e489e0"],["/categories/Github/加速/index.html","c926ed03bf922edf71f41770a27dfaa2"],["/categories/Windows/index.html","cb07c62499da056717fdb7c3471d1bbd"],["/categories/index.html","c8cb854c5f906033329d4b435057f13b"],["/categories/关于我/index.html","9c92356857b2b8cc0def8eb0c9ebc9d2"],["/categories/硬盘终结者/index.html","db4a374878dcc3f8f6a25c8f2df4316d"],["/code/index.html","63c64c481e71104cff43f5e285fad585"],["/css/clipboard.css","faaf9bed7be902c7ccb0a5a612dec621"],["/css/custom.css","ff236258b4a062c0642baad8f530d62f"],["/css/fonts/remixicon.css","3036f9c9899e415692e92cf41e5816de"],["/css/fonts/remixicon.eot","e4e1729baa2a0fedccd57007b0191711"],["/css/fonts/remixicon.svg","26e9fac814fdee82a9c88c264282186e"],["/css/fonts/remixicon.ttf","d53d618eb492c6007beb3507b14010e8"],["/css/fonts/remixicon.woff","9ae2ab3fc48826241f04f254b877c6dd"],["/css/fonts/remixicon.woff2","454eaccf06aeb6c6a9d3cb828461cc54"],["/css/xyfBlogTitle.css","5a98cbb4ea6f1a0ad86d749838f4136b"],["/dist/main.css","1a67c9a796400f6ea3a02326d3021a8f"],["/dist/main.js","16485b71d07e5ad781dcd232ddb0dd0d"],["/go.html","b53975aad57f4623eb475f6af58d3934"],["/images/404.jpg","1f537ab3756f7f972afcf89889247b40"],["/images/alipay.jpg","e21cf331d9ffe9a79284dfae231674ca"],["/images/ayer-side.svg","1e0c884218796525989daf02b23d3807"],["/images/ayer.png","1116b77c213cb14584c671280f805195"],["/images/ayer.svg","af6957f8bcc6569cb60d49f1a5548d9c"],["/images/beian.png","25797632add41f46c37f3d58c0a856fe"],["/images/cover1.jpg","81db5164c09c53ac17152c071578111d"],["/images/cover2.jpg","135c931e786d1e1fe59ab1343cf910fa"],["/images/cover3.jpg","7c084b950a063b068e63c683ce010108"],["/images/cover4.jpg","cb0e1f1d738c3f5ae35c8b88417dc489"],["/images/cover5.jpg","b576b03ae35fa56bb36d260a6263a356"],["/images/cover6.jpg","8a1e50868dd4b77bfcd57c4c1425ec39"],["/images/cover7.jpg","8408c285db9203a15b4bc3d3764bae87"],["/images/forkme.png","d8fe3659927f8422fe58e4ff394cc84f"],["/images/gitee.png","32f1cc87166a897132b10b2c725bbc5b"],["/images/github.png","8f2d63c4088504cbb58b790889164a33"],["/images/hexo-tag-chart.png","9bcf2fcf52acba7de7b5ae45c4263ba7"],["/images/hexo.png","b055abc4b3c84e8d3d5a102d8b55d3ae"],["/images/sponsor.jpg","e13441d1d9a807abc8625c32b7f706f5"],["/images/wechat.jpg","8e85ab3046ceb7b9f7e531e34a9f8e52"],["/index.html","dde42b25989da44b15ee6811461fb4f5"],["/info/index.html","f21ffa1eb66282d17951e60962b378b5"],["/js/FunnyTitle.js","70089fd58ed8762bbef635a947f712d1"],["/js/busuanzi-2.3.pure.min.js","e847af6da4d5adc5b23924d3421a5ccf"],["/js/clickBoom1.js","0cd5eac7a7332a5285bb84d424374db2"],["/js/clickBoom2.js","5ec5c44691c4228e7627c235a592cb24"],["/js/clickLove.js","b33a7be24cf111f85d870ab3608e0daf"],["/js/dz.js","62a40f08fedb65ba3cae2e1b4f3e825d"],["/js/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/js/lazyload.min.js","16b486c05843a4dc4e9cd4295ca699c2"],["/js/search.js","15fd71182a89a2686efd63ac72ee44ac"],["/js/tocbot.min.js","c4536ea3bf2e39818cfd27b73bfe397f"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/playlist/index.html","3021affda396dfe93acb72a42424ba81"],["/shuoshuo/index.html","0c3cd2d084b86a9096bd14afb379adf6"],["/sw-register.js","ea127b7ed2ec27362fcca1d9769d625e"],["/tags/Disk-Squeezer/index.html","9ce1376ce9c7e6786c288e1663281f26"],["/tags/Gtihub/index.html","bc4ecb6aac7c8536231e2bb9d15785e9"],["/tags/ISO/index.html","58c876818a96179f87af0dd5d71991a1"],["/tags/SwitchHosts/index.html","123d4179618517ccf2610749fa5b1a36"],["/tags/Watt-Toolkit/index.html","61accd00e1bb7a6ee4bfaa54e460a81b"],["/tags/Windows/index.html","a3967129491c7d223e686f9b46ddb1a1"],["/tags/githubfast-com/index.html","3022bc229db26bf9e6e1b5425ab82334"],["/tags/hardDiskTerminator/index.html","2ea2c6bca19d0e57abe19623e0da1f91"],["/tags/hexo/index.html","553948a37f7cd9fd485e6c6026427fd8"],["/tags/index.html","6637430507708284c49a877014839c80"],["/tags/加速/index.html","a9d949e074cc68033a3cf6593e9bc289"],["/tags/博客/index.html","2bf750b389b223736e839df3d4477fe0"],["/tags/安装/index.html","1309e981f158243bf495ffc6a3a2ecbf"],["/tags/开发者/index.html","8f869b8e1413b8ea816dfa1cdd7bc619"],["/tags/硬盘终结者/index.html","693128d7912b827c32de09a2f27f8502"],["/tags/系统/index.html","b4a1b02bf8c9607c09dbe601de399033"],["/tags/自制软件/index.html","66071d8f1bd6508e024298053799d342"],["/tags/自我介绍/index.html","22f38d39eda019dcf96745c6ba7bd2bb"],["/tools/index.html","a6ea277f02a86bf0b97a286900763b7c"]];
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
