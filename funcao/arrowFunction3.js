let comparComThis = function (param) {
    console.log(this === param);
}

comparComThis(global);

const obj = {}
comparComThis = comparComThis.bind(obj);
comparComThis(global);
comparComThis(obj);

let comparComThisArrow = param => console.log(this === param);
comparComThisArrow(global);
comparComThisArrow(module.exports);

comparComThisArrow = comparComThisArrow.bind(obj);
comparComThisArrow(obj);
comparComThisArrow(module.exports);