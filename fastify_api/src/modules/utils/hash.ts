import crypto from "crypto"

export function hashPassword(password:String){
    const salt = crypto.randomBytes(16).toString("hex");

    const hash = crypto.pbkdf2Sync(Buffer.from(password),salt,1000,64,"sha512").toString("hex");

    return {hash,salt}

}

export function verifyPassword({candidatePassword,salt,hash,}:{candidatePassword:string;salt:String;hash:String}){

    const candidateHash = crypto.pbkdf2Sync(Buffer.from(candidatePassword),Buffer.from(salt),1000,64,"sha512").toString("hex");
    
    return candidateHash === hash;
}