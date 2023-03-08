import { $$ } from "./doms.js";
import { base_url } from "../app_const.js";
export class TinyMCE {
    constructor(selector, inline) {
        this.selector = selector;
        this.inline = inline;
        this.init();
    }
    init() {
        // @ts-ignore
        tinymce.init({
            selector: this.selector,
            forced_root_block: false,
            inline: this.inline,
            toolbar_location: 'bottom',
            plugins: 'image code',
            toolbar: 'undo redo | styleselect | forecolor | bold italic | link image',
            images_upload_url: 'TinyMCEApi/image',
            images_upload_handler: async function (blobInfo, success, failure) {
                console.log(blobInfo, success, failure);
                let formData = new FormData();
                formData.append('file', blobInfo.blob(), blobInfo.filename());
                const response = await fetch(`${base_url}/TinyMCEApi/image/`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                console.log(data);
                success(data.location);
                // setTimeout(function () {
                //     /* no matter what you upload, we will turn it into TinyMCE logo :)*/
                //     success(`http://moxiecode.cachefly.net/tinymce/v9/images/logo.png`);
                // }, 2000);
            },
            setup: function (ed) {
                ed.on("click", function (ed, evt) {
                    $$('.tox').forEach(el => {
                        el.classList.add("z-50");
                    });
                });
            }
            // setup : function(ed:any) {
            //     ed.onInit.add(function(ed:any){
            //         $('tr.mceFirst').classList.add("z-50")
            //     })
            // }
        });
    }
}
