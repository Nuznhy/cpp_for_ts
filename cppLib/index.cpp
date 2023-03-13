#include "napi.h"
#include <string>
#include <iostream>
#include "lib.h"

Napi::String calculateFunction(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    float arg0 = info[0].As<Napi::Number>().FloatValue();
    double arg1 = info[1].As<Napi::Number>().DoubleValue();
    int32_t arg2 = info[2].As<Napi::Number>().Int32Value();
    std::string arg3 = info[3].As<Napi::String>();
    std::string result = calculate(arg0, arg1, arg2, arg3);
    return Napi::String::New(env, result);
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set(
        Napi::String::New(env, "calculateFunction"), 
        Napi::Function::New(env, calculateFunction)
    );
    return exports;
}

NODE_API_MODULE(calc, Init);