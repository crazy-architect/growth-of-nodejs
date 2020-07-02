N-API公开的API通常用于创建和操作JavaScript值，API具有以下属性
* 所有N-API调用均返回类型为状态码napi_status，此状态指示API调用成功还是失败
* API的返回值通过out参数传递
* 所有JavaScript值都在名为的不透明类型之后抽象napi_value
* 如果是错误状态代码，则可以使用获取更多信息napi_get_last_error_info
  
### 用法
* 为了使用N-API功能，需要包括node_api.h文件```#include<node_api.h>```
* 如果需要确保与特定版本的兼容，可以明确指定该版本、
  ```
  #define NAPI_VERSION 3
  #include <node_api.h>
  ```
* 一些N-API是实验性的，这些使用时也需要显示选择
  ```
  #define NAPI_EXPERIMENTAL
  #include <node_api.h>
  ```

### API
##### 环境生命周期API
* napi_set_instance_data
* napi_get_instance_data
##### 基本的N-API数据类型
* napi_status
  > 如果API返回失败状态时需要其他信息，则可以通过调用napi_get_last_error_info来获取信息
* napi_extended_error_info
* napi_env
  > 用于表示基础N-API实现可用于保留特定于VM的状态的上下文。调用本机函数时，此结构将传递给本机函数，并且在进行N-API调用时必须将其传递回本机
* napi_value
  > 这是一个不透明的指针，用于表示JavaScript值
* napi_threadsafe_function
  > 这是一个不透明的指针，表示一个JavaScript函数，可用通过过个线程异步调用该函数napi_call_threadsafe_function()
* napi_threadsafe_function_release_mode
* napi_threadsafe_fucntion_call_mode
###### N-API内存管理类型
* napi_handle_scope
* napi_escapable_handle_scope
* napi_ref
###### N-API回调类型
* napi_callback_info
* napi_callback
* napi_finalize
* napi_async_execute_callback
* napi_async_complete_callback
* napi_threadsafe_function_call_js
##### 错误处理
###### 返回值
* napi_get_last_error_info
###### 例外情况
* napi_throw
* napi_throw_error
* napi_throw_type_error
* napi_throw_range_error
* napi_is_error
* napi_create_error
* napi_create_type_error
* napi_create_range_error
* napi_get_and_clear_last_exception
* napi_is_exception_pending
* napi_fatal_exception
###### 致命错误
* napi_fatal_error

##### 对象生命周期管理
###### 使句柄寿命比本机方法短
* napi_open_handle_scope
* napi_close_handle_scope
* napi_open_escapable_handle_scope
* napi_close_escapable_handle_scope
* napi_escape_handle
###### 对寿命比本机方法更长的对象的引用
* napi_create_reference
* napi_delete_reference
* napi_reference_refnapi_reference_unref
* napi_get_reference_value
###### 在当前Node.js实例退出时进行清理
* napi_add_env_cleanup_hook
* napi_remove_env_cleanup_hook

##### 模块注册

##### 使用JavaScript值
###### 枚举类型
* napi_key_collection_mode
* napi_key_filter
* napi_key_conversion
* napi_valuetype
* napi_typedarray_type
###### 对象创建功能
* napi_create_array
* napi_create_array_with_length
* napi_create_arraybuffer
* napi_create_buffer
* napi_create_buffer_copy
* napi_create_date
* napi_create_external
* napi_create_external_arraybuffer
* napi_create_external_buffer
* napi_create_object
* napi_create_symbol
* napi_create_typedarray
* napi_create_dataview
###### 从C类型转换为N-API的函数
* napi_create_int32
* napi_create_uint32
* napi_create_int64
* napi_create_double
* napi_create_bigint_int64
* napi_create_bigint_uint64
* napi_create_bigint_words
* napi_create_string_latin1
* napi_create_string_utf16
* napi_create_string_utf8
###### 从N-API转换为C类型的函数
* napi_get_array_length
* napi_get_arraybuffer_info
* napi_get_buffer_info
* napi_get_prototype
* napi_get_typedarray_info
* napi_get_dataview_info
* napi_get_date_value
* napi_get_value_bool
* napi_get_value_double
* napi_get_value_bigint_int64
* napi_get_value_bigint_uint64
* napi_get_value_bigint_words
* napi_get_value_external
* napi_get_value_int32
* napi_get_value_int64
* napi_get_value_string_latin1
* napi_get_value_string_utf8
* napi_get_value_string_utf16
* napi_get_value_uint32
###### 获取全局实例的函数
* napi_get_boolean
* napi_get_global
* napi_get_null
* napi_get_undefined

##### 使用JavaScript值和抽象操作
* napi_coerce_to_bool
* napi_coerce_to_number
* napi_coerce_to_object
* napi_coerce_to_string
* napi_typeof
* napi_instanceof
* napi_is_array
* napi_is_arraybuffer
* napi_is_buffer
* napi_is_date
* napi_is_error
* napi_is_typedarray
* napi_is_dataview
* napi_strict_equals
* napi_detach_arraybuffer
* napi_is_detached_arraybuffer

##### 使用JavaScript属性
###### 结构体
* napi_property_attributes
* napi_property_descriptor
###### 功能
* napi_get_property_names
* napi_get_all_property_names
* napi_set_property
* napi_get_property
* napi_has_property
* napi_delete_property
* napi_has_own_property
* napi_set_named_property
* napi_get_named_property
* napi_has_named_property
* napi_set_element
* napi_get_element
* napi_has_element
* napi_delete_element
* napi_define_properties

##### 使用JavaScript函数
* napi_call_function
* napi_create_function
* napi_get_cb_info
* napi_get_new_target
* napi_new_instance

##### 对象包装
* napi_define_class
* napi_wrap
* napi_unwrap
* napi_remove_wrap
* napi_add_finalizer

##### 简单的异步操作
* napi_create_async_work
* napi_delete_async_work
* napi_queue_async_work
* napi_cancel_async_work

##### 自定义异步操作
* napi_async_init
* napi_async_destroy
* napi_make_callback
* napi_open_callback_scope
* napi_close_callback_scope

##### 版本管理
* napi_get_node_version
* napi_get_version

##### 内存管理
* napi_adjust_external_memory

##### 承诺
* napi_create_promise
* napi_resolve_deferred
* napi_reject_deferred
* napi_is_promise

##### 脚本执行
* napi_run_script

##### libuv事件循环
* napi_get_uv_event_loop

##### 异步线程安全函数调用
* napi_create_threadsafe_function
* napi_get_threadsafe_function_context
* napi_call_threadsafe_function
* napi_acquire_threadsafe_function
* napi_release_threadsafe_function
* napi_ref_threadsafe_function
* napi_unref_threadsafe_function

