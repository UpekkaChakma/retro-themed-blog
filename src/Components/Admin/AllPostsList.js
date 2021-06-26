import React from 'react';

const AllPostsList = (props) => {
    const postList = props.post;
    const deletePostById = props.deletePostById;
    const { postTitle, Description, _id } = postList;
    return (
        <tr>
            <td>{postTitle}</td>
            <td>{Description}</td>
            <td>
                <img style={{ width: '30px', cursor: 'pointer', margin: 'auto', padding: '4px' }} onClick={() => deletePostById(_id)} src="https://i.ibb.co/wMbLHFp/Group-33150.png" alt="Group-33150" border="0"></img>
            </td>
        </tr>
    );
};

export default AllPostsList;