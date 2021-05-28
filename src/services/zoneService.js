import http from '../common/http';

const getAll = () => {
  return http.get('/zone/getall');
};

const get = id => {
  return http.get(`/zone/get/${id}`);
};

const create = data => {
  return http.post(`/zone/add`, data);
};

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = id => {
  return http.delete(`/zone/remove/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};

const ZoneService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default ZoneService;
