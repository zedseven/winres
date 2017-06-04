var searchIndex = {};
searchIndex["winres"] = {"doc":"Rust Windows resource helper","items":[[3,"WindowsResource","winres","",null,null],[4,"Toolkit","","The compiler version defines which toolkit we have to use.\nThe value is defined by the value of `cfg!(target_env=)`",null,null],[13,"MSVC","","use Microsoft Visual C and Windows SDK",0,null],[13,"GNU","","use GNU Bintools",0,null],[13,"Unknown","","neiter `cfg!(target_env=&quot;msvc&quot;)` nor `cfg!(target_env=&quot;gnu&quot;)` was set.",0,null],[4,"VersionInfo","","Version info field names",null,null],[13,"FILEVERSION","","The version value consists of four 16 bit words, e.g.,\n`MAJOR &lt;&lt; 48 | MINOR &lt;&lt; 32 | PATCH &lt;&lt; 16 | RELEASE`",1,null],[13,"PRODUCTVERSION","","The version value consists of four 16 bit words, e.g.,\n`MAJOR &lt;&lt; 48 | MINOR &lt;&lt; 32 | PATCH &lt;&lt; 16 | RELEASE`",1,null],[13,"FILEOS","","Should be Windows NT Win32, with value `0x40004`",1,null],[13,"FILETYPE","","The value (for a rust compiler output) should be\n1 for a EXE and 2 for a DLL",1,null],[13,"FILESUBTYPE","","Only for Windows drivers",1,null],[13,"FILEFLAGSMASK","","Bit mask for FILEFLAGS",1,null],[13,"FILEFLAGS","","Only the bits set in FILEFLAGSMASK are read",1,null],[11,"eq","","",1,null],[11,"hash","","",1,null],[11,"fmt","","",1,null],[11,"toolkit","","",2,{"inputs":[],"output":{"name":"toolkit"}}],[11,"new","","Create a new resource with version info struct",2,{"inputs":[],"output":{"name":"self"}}],[11,"set","","Set string properties of the version info struct.",2,null],[11,"set_toolkit_path","","Set the correct path for the toolkit.",2,null],[11,"set_language","","Set the user interface language of the file",2,null],[11,"set_icon","","Set an icon filename",2,null],[11,"set_version_info","","Set a version info struct property\nCurrently we only support numeric values, you have to look them up.",2,null],[11,"set_manifest","","Set the embedded manifest file",2,null],[11,"set_manifest_file","","Some as [`set_manifest()`] but a filename can be provided and\nfile is included by the resource compieler itself.\nThis method works the same way as [`set_icon()`]",2,null],[11,"write_resource_file","","Write a resource file with the set values",2,null],[11,"set_resource_file","","Set a path to an already existing resource file.",2,null],[11,"set_output_directory","","Override the output directoy.",2,null],[11,"compile","","Run the resource compiler",2,null]],"paths":[[4,"Toolkit"],[4,"VersionInfo"],[3,"WindowsResource"]]};
initSearch(searchIndex);