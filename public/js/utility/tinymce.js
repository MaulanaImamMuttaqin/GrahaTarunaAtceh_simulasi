import { $$ } from "./doms.js";
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
            inline: this.inline,
            plugins: [
                "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                "searchreplace wordcount visualblocks visualchars code fullscreen",
                "insertdatetime nonbreaking save table contextmenu directionality",
                "emoticons template paste textcolor colorpicker textpattern"
            ],
            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image responsivefilemanager",
            automatic_uploads: true,
            image_advtab: true,
            images_upload_url: "http://localhost:8080/TinyMCEApi/image/",
            file_picker_types: 'image',
            paste_data_images: true,
            relative_urls: false,
            remove_script_host: false,
            file_picker_callback: function (cb, value, meta) {
                var input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');
                input.onchange = function () {
                    //@ts-ignore
                    var file = this.files[0];
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        var id = 'post-image-' + (new Date()).getTime();
                        // @ts-ignore
                        var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                        var blobInfo = blobCache.create(id, file, reader.result);
                        blobCache.add(blobInfo);
                        cb(blobInfo.blobUri(), { title: file.name });
                    };
                };
                input.click();
            },
            setup: function (ed) {
                ed.on("click", function (ed, evt) {
                    $$('.tox').forEach(el => {
                        console.log(el);
                        el.classList.add("z-50");
                    });
                });
            },
        });
    }
}
