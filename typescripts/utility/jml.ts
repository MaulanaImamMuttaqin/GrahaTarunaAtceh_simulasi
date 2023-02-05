// // export class JML {
// //     element:HTMLElement

// //     constructor(el:HTMLElement){
// //         this.element = el
// //     }

// //     ml
// // }



// export function _(name: string, props: any, nest: any) {
//     return {
//         name: name,
//         props: props,
//         children: nest,
//     }
// }

// export function render(root: any, jml: any) {
//     var el = document.createElement(jml.name);
//     if (jml.props) {
//         for (var name in jml.props) {
//             var value = jml.props[name];
//             if (name.indexOf("on") === 0) {
//                 el.addEventListener(name.substr(2).toLowerCase(), value, false)
//             } else {
//                 el.setAttribute(name, value);
//             }
//         }
//     }
//     root.appendChild(el);
//     var event = new Event("create");
//     el.dispatchEvent(event);
//     if (!jml.children) {
//         return el;
//     }
//     return nester(el, jml.children);
// }

// export function nester(el: any, n: any) {
//     if (typeof n === "string") {
//         var t = document.createTextNode(n);
//         el.appendChild(t);
//     } else if (n instanceof Array) {
//         for (var i = 0; i < n.length; i++) {
//             if (typeof n[i] === "string") {
//                 var t = document.createTextNode(n[i]);
//                 el.appendChild(t);
//             } else if (isJML(n[i])) {
//                 render(el, n[i]);
//             }
//         }
//     } else if (isJML(n)) {
//         render(el, n)
//     }
//     return el;
// }

// function isJML(j: any) {
//     return j.hasOwnProperty("name") && j.hasOwnProperty("props") && j.hasOwnProperty("children");
// }
export function _(tagName: string, props: any, nest: any) {
    var el = document.createElement(tagName);
    if (props) {
        for (var name in props) {
            if (name.indexOf("on") === 0) {
                el.addEventListener(name.substr(2).toLowerCase(), props[name], false)
            } else {
                el.setAttribute(name, props[name]);
            }
        }
    }
    if (!nest) {
        return el;
    }
    if (typeof nest === "string") {
        if (nest.includes("/*html*/")) {
            let innerEls = nest.split("/*html*/");
            el.innerHTML = innerEls[1]
        } else {
            var t = document.createTextNode(nest);
            el.appendChild(t);
        }
    } else if (nest instanceof Array) {
        for (var i = 0; i < nest.length; i++) {
            if (typeof nest[i] === "string") {
                var t = document.createTextNode(nest[i]);
                el.appendChild(t);
            } else if (nest[i] instanceof Node) {
                el.appendChild(nest[i]);
            }
        }
    } else if (nest instanceof Node) {
        el.appendChild(nest)
    }
    return el;
}