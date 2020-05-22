"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
function sendMessage(request, response) {
    return response.json({ message: 'Hello World!' });
}
exports.sendMessage = sendMessage;
