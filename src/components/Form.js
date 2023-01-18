import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { apis } from '../apis/apis';
import { commentsActions } from '../redux/reducers/comments';

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

function Form() {
  const dispatch = useDispatch();
  const commentData = useSelector(state => state.comments.comment);
  const page = useSelector(state => state.comments.page);

  const [comment, setComment] = useState({
    profile_url: '',
    author: '',
    content: '',
    createdAt: '',
  });

  const handleChange = event => {
    const { value, name } = event.target;
    setComment({ ...comment, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (commentData.id) {
      apis.putComment(comment, commentData.id);
      setTimeout(() => {
        dispatch(commentsActions.getComments(page));
      }, 200);
    }

    if (!commentData.id) {
      apis.postComment(comment);
      setTimeout(() => {
        dispatch(commentsActions.getComments(1));
      }, 200);
    }

    setComment({
      profile_url: '',
      author: '',
      content: '',
      createdAt: '',
    });
  };

  useEffect(() => {
    setComment({
      profile_url: commentData.profile_url,
      author: commentData.author,
      content: commentData.content,
      createdAt: commentData.createdAt,
    });
  }, [commentData]);

  return (
    <FormStyle>
      <form>
        <input
          type="text"
          name="profile_url"
          value={comment.profile_url}
          defaultValue={commentData.profile_url}
          onChange={handleChange}
          placeholder="https://picsum.photos/id/1/50/50"
          required
        />
        <br />
        <input
          type="text"
          name="author"
          value={comment.author}
          defaultValue={commentData.author}
          onChange={handleChange}
          placeholder="작성자"
        />
        <br />
        <textarea
          name="content"
          value={comment.content}
          defaultValue={commentData.content}
          onChange={handleChange}
          placeholder="내용"
          required
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          value={comment.createdAt}
          defaultValue={commentData.createdAt}
          onChange={handleChange}
          placeholder="2020-05-30"
          required
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          등록
        </button>
      </form>
    </FormStyle>
  );
}

export default Form;
