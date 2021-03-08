/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","7ed44105d1d7e784e0535cc8ea811d28"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","4952126ea19ba41e2b33fa19fa5ff9e9"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","019780a911ac781e71984fa3814eb2e3"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","a82a30bedb8706307c5a8f6ebf642b5a"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","1eab657517798fedfafd3ea18f19d6e5"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","4678263adc8af3f775a1c9902d348ddf"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","d8fa0daf4e969d27df784579fcec754c"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","6fe1591e6966ea6732a106a39e153475"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","0304db67fab43cc2f4596ecca455fdde"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","e5a10fac6612c43e6f093479829e7d97"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","5f2c3cc155d76fd79042ed28f822cd44"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","8e71e6afed042eb7bbae57ad06a1ea26"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","2c4e1f16abe7afc36cbb89fd26f941fa"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","79e050ee88dc838aa50b2fa69ee8776b"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","b776413acb1166f7ccaf8d09f51c9cbd"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","69c4602aa1e2ba978c76fa09c41bb51f"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","21078e36373a1720e9d53ed055f47059"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","350d0197f2aa08f4737df9594b7c99ca"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","1e8a1d7a2cd37cb9db26695775c061fd"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","18b48766e5dee9a0bb01400982330135"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","d2016ec393583dfa8a48aeef89702f7f"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","18c0a84a3f1b678746cb6e16ac3856fb"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","8f61f67e55e9c956a3982e30aed8a2b2"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","79a80b2c63469b6dd8ea273dbef020ae"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","84b16edd4efaf72fe9abb5be2f784d69"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","cb4f5c1f88938f3b23b433658ea726c4"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","e82e0fd6c2b345454e985e4cd9a65179"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","03659848bb76923fce787dc0aaf97130"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","8f55dee094b397396b5963314c600f8f"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","ea60cd1e4f6f09e1219b23b301de3f06"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","b3f2ebe273c95872a74c35236d1476b3"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","1712bdc66f7fd64b4bdc813d290a3864"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","ab459a93e0af4bb896ee091e30c0e084"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","66fa67fc2921d8e06d4916217b2c6acc"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","75ab0b64afa938fbdd9449bad1644a02"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","9b3ec3e09e6e2445cb0ace4f863c175a"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","6057b1e2e4061e0273954f02a77ccf9a"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","5a627ea8eb8559d1c3b8877f9d6e5493"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","e52aa6a9f6657c0a86c2136795a0383b"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","96bb5c6215db9d826e5abdd53f86263e"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","589bcaa48f7b6126b14bae7fb373cef6"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","7a7a85032109b2143273f35ec8326a97"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","b70d44779efeea27809a8f15f7f5717b"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","d1e165d60a032ce59732b1b682b630dc"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","48a88e494c1db796364d6a981f2fcdcc"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","bfaa857a8092f6afb64c97e40c3b37fe"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","c360ac84d9417158bbccaba7c5ab686f"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","7400b82e0f1d7ce59b8375e6c7efde25"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","935bac01f88eece99071e3c16e615af7"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","84cb96f386319c2b98786c10f61ecc53"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","ce1fe72c1561c4cb8afbcd868cc96712"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","392a7af71532ccb0bb17f320ee9ace61"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","6bd981e0fbd4e6e9c5ba7838c370f73d"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","be2e9dc8aa20b7770e08b2fb1a4998e4"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","173c3016e059ed6fa5cd08e73653326b"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","db0f03274f146903d004888f083c39fb"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","54bab40d77d796ba12662b67c3a5370b"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","c1e24ec2fafa0e6ce7e25b09950a06f2"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","929bab52bab5e18865ef86d92fdda081"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","1481cd9848ded4622fac58867ffbc94e"],["E:/qinhao/hexo/public/ByteDanceVerify.html","ae72608359bd7793d812dca2c167d5c9"],["E:/qinhao/hexo/public/about/index.html","72ab968f8b3e4c0de351ca5e88768409"],["E:/qinhao/hexo/public/archives/2020/02/index.html","800c521659b220f01236e8defec22173"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","45173100b212b1c69051d5b7ad8bca68"],["E:/qinhao/hexo/public/archives/2020/03/index.html","c0ec01172dce9170149ce2c4ad46a822"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","9384bf19477b5d2d1bd9c5469c3e8a92"],["E:/qinhao/hexo/public/archives/2020/04/index.html","cc73af21d0f60858b17c9fec98e6c669"],["E:/qinhao/hexo/public/archives/2020/05/index.html","df3bf04db2829c74c59be1127594134c"],["E:/qinhao/hexo/public/archives/2020/06/index.html","6cfcc0c275989ec56725e2e6d8b72a29"],["E:/qinhao/hexo/public/archives/2020/07/index.html","85b1f990f39cf5d5a6dfd8f94eb2b2d9"],["E:/qinhao/hexo/public/archives/2020/08/index.html","b9f441dad531982554878ba011844b87"],["E:/qinhao/hexo/public/archives/2020/10/index.html","cd245660fc690488f3bb4d3666888e88"],["E:/qinhao/hexo/public/archives/2020/11/index.html","d7a9ac349eeb9248abcb6d3eb694738c"],["E:/qinhao/hexo/public/archives/2020/12/index.html","4381078ebb347ceece6b8d0c6478a175"],["E:/qinhao/hexo/public/archives/2020/index.html","6c844bdebaaa0bbe78ee289c8b2c649d"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","3d4516c4f115bce03582dd8f698722b0"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","f85c28ac55aa50430d311b8d72284e71"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","e79aa841e2b3dcc7134bef1d2c209a00"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","ed3e9e4d4531f5683d612d65e84254bd"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","84f05fa9890874081a702999816eb268"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","4e2f1c938f550f34d652d6b0cd70ccbb"],["E:/qinhao/hexo/public/archives/index.html","fa4d00f556ed0b38eb2223edb5bc4161"],["E:/qinhao/hexo/public/archives/page/2/index.html","68a96fb4bbb593b5c29a2a0f5d4999f0"],["E:/qinhao/hexo/public/archives/page/3/index.html","fa4d00f556ed0b38eb2223edb5bc4161"],["E:/qinhao/hexo/public/archives/page/4/index.html","68a96fb4bbb593b5c29a2a0f5d4999f0"],["E:/qinhao/hexo/public/archives/page/5/index.html","68a96fb4bbb593b5c29a2a0f5d4999f0"],["E:/qinhao/hexo/public/archives/page/6/index.html","68a96fb4bbb593b5c29a2a0f5d4999f0"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","9a6b3937c14e48ff54097a6d81209f15"],["E:/qinhao/hexo/public/categories/Java/index.html","40b20379ca3f7d40a30ce8c28b408fc7"],["E:/qinhao/hexo/public/categories/Linux/index.html","fd6a90309302825c1a827ea103f6a207"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","7a5fffcbf4c7f19aa2d75fb9f194734d"],["E:/qinhao/hexo/public/categories/Python/index.html","2c5f5862c59d3ba54c001d6989fdcb60"],["E:/qinhao/hexo/public/categories/交换机/index.html","305b6436e543a337d313bcbfd1dceda0"],["E:/qinhao/hexo/public/categories/华为认证/index.html","6ebcbdc0d14ea217d3675608b18a59d8"],["E:/qinhao/hexo/public/categories/小技巧/index.html","d6d5a89d6d9449fdd677cda06197e9ed"],["E:/qinhao/hexo/public/categories/数据库/index.html","8c636f9250bfc3ee695946467992b62a"],["E:/qinhao/hexo/public/categories/服务器/index.html","ffe88696b0a92da809b20b17957b5731"],["E:/qinhao/hexo/public/categories/网络安全/index.html","32083f2fcc734518742883f6f85ef68b"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","e3a4e2ee35cef1089174af6819529bc8"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","1bf03f3012aa4187b28a886527506677"],["E:/qinhao/hexo/public/categories/软件破解/index.html","a7517bca93b6208698851496c8049273"],["E:/qinhao/hexo/public/categories/通信技术/index.html","8c1fe676fe4c6b6972d7f01468d13d67"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","20c045321f529afcbdb4bc595b3fb3b4"],["E:/qinhao/hexo/public/category/index.html","69cd61a7e75dae99ad24503dafc63f5e"],["E:/qinhao/hexo/public/css/style.css","f5e2c67bc8af009b55f92e0cda779c39"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","ded982f0390a4e151e8d5546a6169441"],["E:/qinhao/hexo/public/donate/drinks/script.js","12822c9e4821b7b1c38d42583d72e614"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a0bb386e2013501c41d0f7f3261ac033"],["E:/qinhao/hexo/public/donate/simple/script.js","092ba15b6ecba01c134811a52b3994a8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","0aa4afdd03c9c66a0ba49a3639a76931"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","981308c960f46ec01c6478da9e34908a"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","22e5a209a5b0735a39c8f5f87e2ccd26"],["E:/qinhao/hexo/public/page/2/index.html","8ef23791e3c6693b941cda43ce552f9a"],["E:/qinhao/hexo/public/page/3/index.html","77911779402a71f14d5e014cc209d55d"],["E:/qinhao/hexo/public/page/4/index.html","755a2eaafe69cd43975edde1912465e4"],["E:/qinhao/hexo/public/page/5/index.html","40e42d029641a5e9aef5e7db5446444b"],["E:/qinhao/hexo/public/page/6/index.html","66654de8b5c5c86003a7bef51d9fcccd"],["E:/qinhao/hexo/public/sw-register.js","2693204e0445b7b49a880e608da257fe"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","88f701647f39969a24f25642a2742e67"],["E:/qinhao/hexo/public/tags/MySQL/index.html","f5e369e26aedf2f88a1d36c350c3aedd"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","c8f18e65c31d0273dbe318397353015f"],["E:/qinhao/hexo/public/tags/VPN/index.html","7d17f628bc3ace70e63653e026864f0a"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","928a8693c6dd7cd9cb3aa2048c916250"],["E:/qinhao/hexo/public/tags/index.html","4f0f5f73d9cdb3d5c5efaeec29e7c572"],["E:/qinhao/hexo/public/tags/交换机/index.html","b831d9e0c38bcfe973cff770686b65b3"],["E:/qinhao/hexo/public/tags/图像处理/index.html","e307f6cf0ecb09ed9735dc4118972361"],["E:/qinhao/hexo/public/tags/基础网络/index.html","a984c438d27f80e44a8fddf1f4edad3c"],["E:/qinhao/hexo/public/tags/思科/index.html","f838948318cea46697fcc07d8d7ae61a"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","f680601063632ce816e4d5032c35a2ca"],["E:/qinhao/hexo/public/tags/数据库/index.html","51eb7ef8f8be4c94574c59ce8b5aeee4"],["E:/qinhao/hexo/public/tags/无线技术/index.html","5d4f515a0b6406fd1957e786a5458b13"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","b0d970e7850e620fbe912225cffbd587"],["E:/qinhao/hexo/public/tags/系统安装/index.html","103509ef32f33569c6bbcf65867ee7ed"],["E:/qinhao/hexo/public/tags/网络安全/index.html","a96481030e322350fff941d571cfbd0f"],["E:/qinhao/hexo/public/tags/网络技术/index.html","ae16150ea135e4297edb2c824f44415e"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","2c4137fa504ddcbfc4e6e4bc85a06267"],["E:/qinhao/hexo/public/tags/路由器/index.html","b3d6a4d0e9d44faa8d6f70c4ab5ba15a"],["E:/qinhao/hexo/public/tags/软考/index.html","62b47d633099d1cf10c5a8bdc53b5196"],["E:/qinhao/hexo/public/tags/通信原理/index.html","9b34559121a4723f69dcfc32a34fb0a5"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","c1d013f7ad1721da86cc15012b5193e9"],["E:/qinhao/hexo/public/tags/通信技术/index.html","f24a96e927de6a2412d144f41a4f26d2"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","669fab9b2d773b5dd6c47395641c47d2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







