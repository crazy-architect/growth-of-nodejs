#ifndef VDBWRAPPER_CONFIG_WIN32_H
#define VDBWRAPPER_CONFIG_WIN32_H


#ifndef VDBWRAPPER_SUPPORT_DLLMAIN
#define VDBWRAPPER_SUPPORT_DLLMAIN
#define VDBWRAPPER_EXPORT extern "C" __declspec(dllexport)
#endif
#define Win32Compile
/**
* 当前可执行文件路径
*/
#define CURRENTEXEPATH ""

#include<Windows.h>
/**
*@brief		获取Windows平台下当前线程ID
*@return		当前线程ID值
*/
inline unsigned int getcurrentid()
{
	return ::GetCurrentThreadId();
}
#endif