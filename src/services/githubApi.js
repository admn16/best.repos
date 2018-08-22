import axios from 'axios';
import { githubApi } from 'constants/apiPaths';

const githubAxios = axios.create({
  baseURL: githubApi,
  timeout: 20000,
  headers: {
    Accept: 'application/vnd.github.mercy-preview+json',
  },
});

export const fetchRepositoriesByTag = (tag = '') => githubAxios
  .get(`/search/repositories?q=topic:${tag}&sort=stars`)
  .then(({ data }) => data);

export const fetchRepositoryByAuthorName = ({ author, name }) => githubAxios
  .get(`repos/${author}/${name}`)
  .then(({ data }) => data);

export const fetchRepositoryTags = ({ author, name }) => githubAxios
  .get(`repos/${author}/${name}/tags`)
  .then(({ data }) => data);
