#include "vdb_plot.h"

int add(int a, int b){
	std::cout << "a=" << a << std::endl;
	std::cout << "b=" << b << std::endl;
	int c = a + b;
	std::cout << "c=" << c << std::endl;
	return c;
}

char* join(char* a, char* b) {
	std::cout << "a=" << a << std::endl;
	std::cout << "b=" << b << std::endl;
	std::string c("ab");
	std::cout << "c=" << c << std::endl;
	return (char*)c.c_str();
}

std::string fetch(char* a ,int length) {
	std::cout << "a=" << a << std::endl;
	//std::cout << "b=" << b << std::endl;
	std::cout << "length=" << length << std::endl;
	std::string c = "fetch";
	std::cout << "c=" << c << std::endl;
	return c;
}

std::string fetch2(std::string a) {
	std::cout << "a=" << a << std::endl;
	std::string c = "fetch";
	std::cout << "c=" << c << std::endl;
	return c;
}