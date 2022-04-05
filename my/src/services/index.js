import Get from './Get';
import POST from './Post';
import PUT from './Put';
import DELETE from './Delete';
//get
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComment = () => Get('comments', true);
//post
const postNewsBlog = (data) => POST('posts',false, data);

//Put
const updateNewsBlog    = (data, id)  => PUT(`posts/${id}`,false,data);

//delete
const deleteNewsBlog    = (id) => DELETE(`posts/${id}`,false);

const GENI = {
    getNewsBlog,
    getComment,
    postNewsBlog,
    updateNewsBlog,
    deleteNewsBlog
}

export default GENI;
