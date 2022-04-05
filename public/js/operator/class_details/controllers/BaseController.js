import { Render } from "../../../utility/render";
import Utility from "../../../utility/Utility";
export class BaseController {
}
BaseController.copy_to_clipboard = (id) => {
    Utility.copyToClipboard(id);
    Render.Text("#tooltip-copy-url", "berhasil di salin");
};
BaseController.text_copied = () => {
    Render.Text("#tooltip-copy-url", "Salin ID Tes");
};
