#include <node.h>
#include <iostream>
#include <string>
#include "../vdbwrapper/vdb_plot.h";

namespace demo {

    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::NewStringType;
    using v8::Object;
    using v8::String;
    using v8::Value;

    void Method(const FunctionCallbackInfo<Value>& args) {
        Isolate* isolate = args.GetIsolate();
        std::cout << "I am just a simple demo for add-ons" << std::endl;
        std::cout << "test to call dynamic linked library" << std::endl;
        std::string a = "input";
        std::string c = fetch2(a);
        args.GetReturnValue().Set(String::NewFromUtf8(
            isolate, "world", NewStringType::kNormal).ToLocalChecked());
        
    }

    void Initialize(Local<Object> exports) {
        NODE_SET_METHOD(exports, "hello", Method);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}