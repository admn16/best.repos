import axios from 'axios';
import { githubApi } from 'constants/apiPaths';

const githubAxios = axios.create({
  baseURL: githubApi,
  timeout: 20000,
});

export const fetchRepositoriesByTag = (tag = '') => githubAxios
  .get(`/search/repositories?q=topic:${tag}&sort=stars`)
  .then(({ data }) => data);
