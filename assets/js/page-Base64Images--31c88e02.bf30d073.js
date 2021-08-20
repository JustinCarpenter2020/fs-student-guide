(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{530:function(e,a,s){"use strict";s.r(a);var t=s(2),i=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"base64-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base64-images"}},[e._v("#")]),e._v(" Base64 Images")]),e._v(" "),s("h3",{attrs:{id:"why-optimizing-your-images-with-base64-is-almost-always-a-bad-idea"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-optimizing-your-images-with-base64-is-almost-always-a-bad-idea"}},[e._v("#")]),e._v(' Why "optimizing" your images with Base64 is almost always a bad idea')]),e._v(" "),s("p",[e._v('Unfortunately, even to this day, some optimization plugins and blogs suggest "optimizing" your images by encoding them to Base64 and including that straight into your HTML.')]),e._v(" "),s("p",[e._v("In this post, I want to address why in this day and age, this is almost always a very bad idea that has been carried over from years ago. Back then, web browsers had heavy limits on the number of concurrent connections they could send to the server. This meant an image heavy website would need to queue up requests and wait for the ones before to finish. Base64 provided a way of working around that by using an already open HTTP connection to deliver images embedded directly into the HTML or CSS. This effectively removed the need for an extra roundtrip the browser would need for each of the files.")]),e._v(" "),s("p",[e._v("With the introduction of multiplexing that arrived with HTTP/2, web browsers have become incredibly efficient in delivering hundreds of files through a single connection. This works around most limits that the Base64 encoding solved and in fact means Base64 now does more bad than good.")]),e._v(" "),s("p",[e._v("To get to the answer why, we first need to establish what Base64 actually is. To put it simply, Base64 is an encoding schema used for representing binary data in a text format. This is useful when the storage or delivery medium does not support binary data such as when embedding an image into a database, CSS files or HTML. One must be careful to not mix up compression with encoding. While compression actually compresses data, encoding just defines a way how data is encoded, which brings us to the first issue.")]),e._v(" "),s("h2",{attrs:{id:"download-size-increase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-size-increase"}},[e._v("#")]),e._v(" Download size increase")]),e._v(" "),s("p",[e._v("Although Base64 is a relatively efficient way of encoding binary data it will, on average still increase the file size for more than 25%. This not only increases your bandwidth bill, but also increases the download time.")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://bunnycdn.com/blog/content/images/2019/03/base64-image-size-comparison-1.jpg",alt:""}})]),e._v(" "),s("h2",{attrs:{id:"cpu-overhead"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpu-overhead"}},[e._v("#")]),e._v(" CPU Overhead")]),e._v(" "),s("p",[e._v("When delivering images in Base64, the browser first needs to decode the Base64 encoded strings and then decode the images as well, which introduces an extra layer of unnecessary work. Base64 is very efficient, but count in the GZip or Brotli processing time that happens on the server to compress the response and the milliseconds quickly start adding up.")]),e._v(" "),s("h2",{attrs:{id:"caching-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#caching-issues"}},[e._v("#")]),e._v(" Caching Issues")]),e._v(" "),s("p",[e._v("The third issue is perhaps the biggest performance killer, but perhaps not the most obvious at first glance. When a user accesses your website, the browser will automatically cache the images locally and then load them directly from your disk when visiting the same page again. Due to how Base64 works, the browser is unable to store the images locally so it will always need to fetch them from your server or CDN which creates extra load on your server as well as increases your bandwidth bill.")]),e._v(" "),s("p",[e._v("Another issue here is that if your images are embedded in your HTML code, content delivery networks such as BunnyCDN are not able to cache the files and they will always be returned from your origin server which might be thousands of kilometers away.")]),e._v(" "),s("h2",{attrs:{id:"seo-and-user-experience"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seo-and-user-experience"}},[e._v("#")]),e._v(" SEO and User Experience")]),e._v(" "),s("p",[e._v("The issues are actually not only limited to performance. By using Base64 encoded images on your website, you might also be hurting both your SEO and user experience as well.")]),e._v(" "),s("p",[e._v('The reason for this is that sharing Base64 images is much harder due to the fact that they are not actually accessible via a public URL. This means that web crawlers and your users are unable to get links pointing back to your website, which makes sharing content much harder and can potentially hurt your "page rank" as well.')]),e._v(" "),s("h2",{attrs:{id:"when-to-actually-use-base64"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-to-actually-use-base64"}},[e._v("#")]),e._v(" When to actually use Base64?")]),e._v(" "),s("p",[e._v("Base64 has a lot of uses in technology, but unless you have a very good reason, you should try to avoid using it as part of your HTML or CSS files. There are some edge cases where Base64 might actually be useful.")]),e._v(" "),s("p",[e._v("One such example would be very small images, where the Base64 string is actually smaller than the length of an URL string and HTTP request overhead when linking to an image file. Take for example a 1x1 pixel transparent PNG. Despite the original image being only 68 bytes in size, factoring in the HTTP headers etc, it actually ends up being bigger than the Base64 encoded string:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Empty transparent pixel:\niVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("If you ever run into a blog that suggests using Base64 to improve performance, make sure to take it with a grain of salt and evaluate carefully if there are any real benefits that apply to your own use-case.")]),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("hr"),e._v(" "),s("small",[e._v('Pelzel, D. (2019, March 17). Why "optimizing" your images with Base64 is almost always a bad idea. Retrieved November 16, 2020, from https://bunnycdn.com/blog/why-optimizing-your-images-with-base64-is-almost-always-a-bad-idea/')]),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("h2",{attrs:{id:"daily-journal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#daily-journal"}},[e._v("#")]),e._v(" Daily Journal")]),e._v(" "),s("h3",{attrs:{id:"answer-the-following-questions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#answer-the-following-questions"}},[e._v("#")]),e._v(" Answer the following questions")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("What is a Base64 Encoded Image?")])]),e._v(" "),s("li",[s("p",[e._v("What are the drawbacks of using Base64 Encoding?")])]),e._v(" "),s("li",[s("p",[e._v("Why are these drawbacks issues in this day and age versus in the past?")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);