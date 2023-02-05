import { Render } from "../../../utility/render"
import Utility from "../../../utility/Utility"

export class BaseController {
    static copy_to_clipboard = (id: string): void => {
        Utility.copyToClipboard(id)
        Render.Text("#tooltip-copy-url", "berhasil di salin")
    }

    static text_copied = (): void => {
        Render.Text("#tooltip-copy-url", "Salin ID Tes")
    }
}