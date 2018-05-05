import  EPERM  from "constants";

console.log(process.argv[2]+"\n");
const argc = process.argv.length;
process.argv[5] = 0x40;
process.argv[6] = 0x40;
checkArgInput = function() {
    if(argc < argv.length) {
        return EPERM;
    }
}

console.log(checkArgInput)