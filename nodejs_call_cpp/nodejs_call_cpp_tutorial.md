### Remark
Here I choose the solution based on Nodejs addons mechnism. I have tested the ffi solution, but I failed when I appled one function with char * input parameter and I have not found the reasons. If you see my doc and know how to solve it, please leave message or send email to me, thank you.

### Preparation
* VS2019
* Nodejs source package 
  > I download the 12.x

### Steps
##### 1. build nodejs based on source package
```vcbuild.bat openssl-no-asm vs2019 x64```

##### 2. build c++ projects for be applied in Nodejs
1. create vdbwrapper project for applied in the following vdb_addon project
2. create vdb_addon project for building addons
3. create nodejs files to apply this addons

##### 3. review the code in src fold

