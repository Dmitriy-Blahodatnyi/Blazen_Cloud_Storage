export default async (folderId, username) => require('axios').get(`/drive/getFolderChildrenIncoming?value=${folderId}&username=${username}`)