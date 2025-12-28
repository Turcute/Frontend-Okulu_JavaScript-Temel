// Kullanıcı Onayıyla Son Elemanı Kaldırma (pop)

let files = ["rapor.pdf", "sunum.pptx", "foto.jpg"];

let userFile = prompt(`Do you want to delete the last file? yes/no`)
    if(userFile == `yes`) {
        files.pop(userFile)
    console.log(`Deleted files: ${files}`)
    
    }else
      console.log(files)
