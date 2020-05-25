#ifndef VDBWRAPPER_CONFIG_LINUX_H
#define VDBWRAPPER_CONFIG_LINUX_H

/**
* 动态链接库的导出符号定义，为了兼容Windows平台
*/
#define VDBWRAPPER_EXPORT extern "C" 

#define CURRENTEXEPATH "./"

#include<stdio.h>
#include<pthread.h>
/**
*@brief		获取Linux平台下当前线程ID
*@return		当前线程ID值
*/
inline unsigned int getcurrentid()
{
	return pthread_self();
}
#endif