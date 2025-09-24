const Ziggy = {"url":"http:\/\/localhost:8000","port":8000,"defaults":{},"routes":{"home":{"uri":"\/","methods":["GET","HEAD"]},"todo.index":{"uri":"todo","methods":["GET","HEAD"]},"todo.create":{"uri":"todo\/create","methods":["GET","HEAD"]},"todo.store":{"uri":"todo","methods":["POST"]},"todo.show":{"uri":"todo\/{todo}","methods":["GET","HEAD"],"parameters":["todo"],"bindings":{"todo":"id"}},"todo.edit":{"uri":"todo\/{todo}\/edit","methods":["GET","HEAD"],"parameters":["todo"],"bindings":{"todo":"id"}},"todo.update":{"uri":"todo\/{todo}","methods":["PUT","PATCH"],"parameters":["todo"],"bindings":{"todo":"id"}},"todo.destroy":{"uri":"todo\/{todo}","methods":["DELETE"],"parameters":["todo"],"bindings":{"todo":"id"}},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
