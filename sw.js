/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["/2020/02/14/RedHat_setup_script/index.html","3af45edd574b91f799be0186a7dffeca"],["/2020/02/14/Windows_Web_build_environment/index.html","7d2d35e51eafe24942bf478510cc98d9"],["/2020/02/14/Windows_Web_build_website/index.html","880a9f41473779dbf5dff86a04edfa3d"],["/2020/02/15/Web_site_SSL/index.html","65e760404c2663314cde58660e0963e1"],["/2020/02/15/Windows_Web_often_use/index.html","be41a9367ce91616ac81abad3d192d74"],["/2020/02/15/a_server_build_many_webs/index.html","f18545e34884a782cf027aa1f634f4bc"],["/2020/02/24/ssh/index.html","a514b7b6e42a13a43954971f843bcb7d"],["/2020/02/27/MySQL8_basics/index.html","aa8a21cca47482104bf02b6ae95b1ea1"],["/2020/02/27/OLT_command/index.html","b6015dbee91e98fc38c3a5178f9cd4db"],["/2020/02/27/computer_network_basics/index.html","2013193e8b2643549f0124a46c7b1dbd"],["/2020/02/27/switchport-security/index.html","91a85ad3ef6898f453a7b03814e51f54"],["/2020/03/04/acl/index.html","abaef8228d981ec2d67e46a2cfb932e9"],["/2020/03/06/mobile_communication/index.html","96eae36536f4ab97c042450325942a60"],["/2020/03/06/wireless_word/index.html","88719a1d68b4986969c4be424015ce3d"],["/2020/03/07/3G/index.html","460bb417ff3f5660b091c0cbc187694c"],["/2020/03/07/GSM/index.html","0bc090de6e73b63888052baeddfbd2e6"],["/2020/03/07/IP_Bearer_Network_basic/index.html","7837d57414219371aa4f68774071383e"],["/2020/03/07/LTE/index.html","62a21a84a76f285171d08cb531729d93"],["/2020/03/07/NB-IoT/index.html","acc6102cc59955a53bc78abd7b2457ff"],["/2020/03/07/optical_transport_network_basic/index.html","6421a836761557936c6ff3ddb87e2c11"],["/2020/03/07/wireless_radio/index.html","38c2978721cd3515d081592ad8728c16"],["/2020/03/11/Linux_often_use/index.html","811dc8b54f27aadcd8fa867118de74a2"],["/2020/03/11/Python_basic_(1)/index.html","9417afc990a49a44c6cda2c7a416ff62"],["/2020/03/21/GRE-VPN/index.html","cda8eb0d63f6c6ea4fb56673cc6fc7eb"],["/2020/03/25/IPSec_VPN/index.html","79e2e42511b8b1686c8a4ebab2c520ec"],["/2020/03/29/FixedTools/index.html","040303f27bbe7494bc741b910e221cdb"],["/2020/03/30/GRE-over-IPSec/index.html","0d0f2b60126ffdc62534da53080f2e61"],["/2020/03/31/bitwarden/index.html","ff9c09266b6c7c6205744274b0f5d8be"],["/2020/04/03/Layer/index.html","549ce47879c99a76f117f38f74c0d7d2"],["/2020/04/04/color/index.html","ea9aa64ac959afb9234ea1242d171d6c"],["/2020/04/09/wireless_framework/index.html","d732e9cee4af0993c46e52e55038b727"],["/2020/04/13/manage-MAN-skill/index.html","9c341fbb4f4dc72bece5f92f2093b2f4"],["/2020/04/13/structure-of-MAN/index.html","9d3594ef1c44faec2a61a6b54fb4d7d1"],["/2020/04/20/TD-LTE-System/index.html","3c07d4a831e0e5e388053067318c8498"],["/2020/04/24/Network_Access/index.html","1e5124b71f7bf98c95869e3e5341a500"],["/2020/04/24/build-MAN-idea/index.html","d5cd12afe1802f0033c4cf58cd104a65"],["/2020/04/25/OFDMA/index.html","956c0655621978b2376645b232667903"],["/2020/05/11/MIMO/index.html","e34ea3dfc49c1ca64a87b845a82a77fb"],["/2020/05/12/ICIC/index.html","47ccdb0bad8692d54d754a3475ee5c12"],["/2020/05/19/No-module-named-pip/index.html","f0f02401eddcaa9e43e97d7b0ac78ac4"],["/2020/05/19/huawei-PCManager/index.html","c22f1144c9fae0217543cfd1796d3218"],["/2020/05/19/not-allow-F12/index.html","116e93c6ca839cb0c66bffecf95919f0"],["/2020/05/20/python-2/index.html","49eb70bca8ab7f02c9bb0505f2d32148"],["/2020/05/23/free-get-189vip/index.html","e9abbac13ed4342183b8ca26896c25cb"],["/2020/05/24/Python-3/index.html","662be9220163a31daa9ba896af6015db"],["/2020/05/25/Python-4/index.html","c109fd693e5ae7efe5119d779f6a1774"],["/2020/05/29/huawei-exam-application/index.html","24f18d7a1882def5b1fad5a7e5074888"],["/2020/06/01/Python-5/index.html","ef6b22d0c8fb4ebf3da0ab4242c84d4c"],["/2020/06/11/lanzous/index.html","977f74475d50ba3bee42f48ad7397e2a"],["/2020/06/13/mysql-install/index.html","5cb6ff7507c4103b9981bcb3d7626b1d"],["/2020/07/07/Python_cards_manage/index.html","6800d874636a5635853a1194b492da7b"],["/2020/07/07/Python_variable/index.html","3f5a760c127baed5fe9bbe50e46fa0a1"],["/2020/07/17/computer_Internet_1/index.html","8fe0f1fc80f93bb9b59623a0452fc123"],["/2020/08/13/Files_and_directories/index.html","803c736dc0e5e7bae08a720ecc932722"],["/2020/08/13/system_info/index.html","08c610e63bed7271459e7c9e515562b7"],["/2020/10/01/5G网络优化/index.html","fec209e78734a073030ad32885aa226b"],["/2020/10/05/linux/index.html","243debf371a53bcc8c611ff9ec1aa865"],["/ByteDanceVerify.html","9d018a286b83001e0379514bf4e4cd0a"],["/about/index.html","74700d49d0940dcb480a42835d2ca8d5"],["/archives/2020/02/index.html","5153c41c380f4a145c261fb7f60e99f7"],["/archives/2020/02/page/2/index.html","2b4b154bf2a2967b74890e92dc9e5d78"],["/archives/2020/03/index.html","b15c95d17a501474a895e97e9e230b95"],["/archives/2020/03/page/2/index.html","bf716c3d9b2db53c634b22976022c35c"],["/archives/2020/04/index.html","e9f77c24dcef9ed1221557973603a9d4"],["/archives/2020/05/index.html","a90ad1f553b09cc7d666842482a07cab"],["/archives/2020/06/index.html","5a529eabc9a3bf70362076386746b75e"],["/archives/2020/07/index.html","02db0fe8a5531f0d8218ff0ba4fbcab7"],["/archives/2020/08/index.html","1bc231a4e55f4a33e6b45a919fff8f10"],["/archives/2020/10/index.html","47d93f840df65e0ca891ff8e493119b7"],["/archives/2020/index.html","061b164362c2fbb5a8f3178e2a04c14a"],["/archives/2020/page/2/index.html","8a7bb8712bec82d46d1a111631ff564c"],["/archives/2020/page/3/index.html","c088295656dbc37cd46f106a16c186e5"],["/archives/2020/page/4/index.html","c21ff1ce653a165bbc7768fe3c5b2b83"],["/archives/2020/page/5/index.html","9856d49156022b06da7ce28908cf2d82"],["/archives/2020/page/6/index.html","0582b380d67f34fa0f2f8477f7c0a373"],["/archives/categories/技术/HP交换机配置.html","f20eef5d4dd3662a3ade4ccc20c021d6"],["/archives/index.html","8f257a656f40ff98e2b08e08f0188542"],["/archives/page/2/index.html","8f257a656f40ff98e2b08e08f0188542"],["/archives/page/3/index.html","8f257a656f40ff98e2b08e08f0188542"],["/archives/page/4/index.html","73c51c5a0d3e743449d4ba21b34f50f1"],["/archives/page/5/index.html","73c51c5a0d3e743449d4ba21b34f50f1"],["/archives/page/6/index.html","73c51c5a0d3e743449d4ba21b34f50f1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","4eaf43a808f35b755550ecbf793ee048"],["/categories/Photoshop/index.html","cfd4acc97bc82e5e15223dd8f0cd7a6e"],["/categories/Python/index.html","afec3b88a2314bb8ccc91e877ca68050"],["/categories/交换机/index.html","7975682a929acb8a9758dfbfe28f2914"],["/categories/华为认证/index.html","25e247ec27f783eda17e8af66f513cf7"],["/categories/小技巧/index.html","9934ddbdbb5e2c094dee3fce393dced6"],["/categories/数据库/index.html","1b4d462ced26b3e51ac411a9ddee80f5"],["/categories/服务器/index.html","4656c8af6095ba60ec2d8143a5bb05ed"],["/categories/网络安全/index.html","a92e1568ab272afb970afeb1d204c4fb"],["/categories/计算机三级/index.html","39a09588d1e00cd4bf73fce597322c25"],["/categories/计算机网络/index.html","6d03aca748a40658a76727abf084075b"],["/categories/软件破解/index.html","576bf36b76dcc94fad6e056244744712"],["/categories/通信技术/index.html","6923e49456e256712eaa47ca0daeb44a"],["/categories/通信技术/page/2/index.html","9adbb583c53e465a7af6b1781145621f"],["/category/index.html","555c74b4b99037b1eb57a9a0b6a218ee"],["/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["/friends/index.html","145fdc4810070401bdccfd319220cd9f"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","292b3e4e2376b971b34d39a87e892bb6"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","42c9f7f33a951bf07280d2bcbf270a07"],["/page/2/index.html","c54b570ac59f0b8c8313bd9fcac0b96a"],["/page/3/index.html","c3e3b9c13d6cce4507ac97058f45dfe2"],["/page/4/index.html","549829ab05d455e5fd4526691b5a84be"],["/page/5/index.html","a8fa8d28e479171d0d368c01365c79c7"],["/page/6/index.html","2f4af605d26ed72d11156699a21a4f30"],["/service-worker.js","01ebae7f7a3b4549ba78d8bba6c9f6f2"],["/sw-register.js","58607b14a5ca6ff753a724d0e0467bd1"],["/tags/IIS/index.html","812a313684a242b37fe684406e9c3335"],["/tags/MySQL/index.html","9a999a1a06f814f5c326f69f32229d3f"],["/tags/Photoshop/index.html","743794e490eaa31963cec021bdd75cc1"],["/tags/VPN/index.html","74fc1ea05a295600ec4d204129c68490"],["/tags/Web服务器/index.html","13eb2c837ebf552b01cffd8b4f803153"],["/tags/index.html","c1c6922c169d2964c9722f097c52b04b"],["/tags/交换机/index.html","43fb0e1ac3520eeb82f3ba0f8533a9dd"],["/tags/图像处理/index.html","d10d85f6391639eaecdad7a627833afb"],["/tags/基础网络/index.html","9f05b7ca8f8aa776548d68c7595ad2d4"],["/tags/思科/index.html","e5d4191e8eddeb4ad4ba96dcdd5fa791"],["/tags/思科GRE/index.html","df3ed542835fa6fd1d8209cd5f410c70"],["/tags/数据库/index.html","821da64b2ef0187f679dac401426df49"],["/tags/无线技术/index.html","e423ffad9472b55803ea81a450806b00"],["/tags/无线技术/page/2/index.html","4ec8e5733c97eff5345632301703ee75"],["/tags/系统安装/index.html","7e8f80f3e42898e75b0084767cdd0eaf"],["/tags/网络安全/index.html","65ffd3cf878fb911abd431f86fa7774b"],["/tags/网络技术/index.html","de04661dd8c8c95c8fdf8a28087de285"],["/tags/计算机三级/index.html","667f0131a1c95a2ff07a88b7328a503b"],["/tags/路由器/index.html","1ac33fd00735595c5c5ee9f956f69f3d"],["/tags/软考/index.html","dd1add4649ca03795d83a5ff222a4992"],["/tags/通信原理/index.html","c8817aebe62e5a194636fcec0892e6b5"],["/tags/通信原理/page/2/index.html","b5d8ca907b1237dd35d346ddf52f9a8c"],["/tags/通信技术/index.html","8670f0040d95a79a394b6cc1b857cf8c"],["/tags/通信技术/page/2/index.html","129153f46e5cb64ca73ae0586ae41aff"]];
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
