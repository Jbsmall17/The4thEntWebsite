 

function playlistFormat(record) {
    return {
      "id": record.id,
      "url": record.fields['url'],
      "owner": record.fields['owner'],
      "headliner" : record.fields['image1'][0].url,
      "playlist" : record.fields['image2'][0].url
    }
  }

function songListFormat(record){
    return {
        "id": record.id,
        "S/N": record.fields['S/N'],
        "artist": record.fields["artist"],
        "songName": record.fields["songName"]
    }
}

function subscribersFormat(record){
    return record.fields['email'] 
}
function formatDate(isoDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDate).toLocaleDateString(undefined, options);
}

function eventFormat(record){
    const formattedDate = formatDate(record.fields['date'])
    return {
        "id" : record.id,
        "name" : record.fields['name'],
        "description" : record.fields['description'],
        "date" : formattedDate,
        "url" : record.fields['url'],
        "S/N" : record.fields['S/N']
    }
}

function blogFormat(record){
    const formattedDate = formatDate(record.fields['date'])
    return{
        "id" : record.id,
        "title" : record.fields['title'],
        "description" : record.fields['description'],
        "date" : formatDate,
        "url" : record.fields['url'],
        "S/N" : record.fields['S/N']
    }
}

function execsPicturesFormat(record){
    return {
        "id": record.id,
        "S/N": record.fields['S/N'],
        "Name": record.fields['Name'],
        "Position" : record.fields['Position'],
        "Picture" : record.fields['Picture'][0].url
      }
}


function homeMediaFormat(record){
    return {
        "id" : record.id,
        "S/N" : record.fields['S/N'],
        "Owner": record.fields['Owner'],
        "Media" : record.fields['Media']
    }
}

function serviceFormat(record){
    return {
        "id" : record.id,
        "S/N" : record.fields['S/N'],
        "Title" : record.fields['Title'],
        "Desc" : record.fields['Description']
    }
}

function talentFormat(record){
    return {
        "id" : record.id,
        "S/N" : record.fields['S/N'],
        "Name" : record.fields['Name'],
        "Image" : record.fields['Image'],
        "Link" : record.fields['Link']
    }
}

export {
    playlistFormat,
    formatDate,
    eventFormat,
    blogFormat,
    subscribersFormat,
    songListFormat,
    execsPicturesFormat,
    homeMediaFormat,
    serviceFormat,
    talentFormat
}