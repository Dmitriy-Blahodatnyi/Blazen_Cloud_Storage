export default async (file, parent) => {
    file.append('parent', parent);
    return require('axios').post('/drive/addFile', file, {
        headers: {'content-type': 'multipart/form-data'}
    });
}