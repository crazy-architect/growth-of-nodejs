#ifndef VDBWRAPPER_VDB_PLOT_H
#define VDBWRAPPER_VDB_PLOT_H

#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <string>
#include "platform.h";

VDBWRAPPER_EXPORT int add(int a, int b);

VDBWRAPPER_EXPORT char* join(char* a, char* b);

VDBWRAPPER_EXPORT std::string fetch(char* a,int length);

VDBWRAPPER_EXPORT std::string fetch2(std::string a);
#endif