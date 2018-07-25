'use strict';
/* global $*/


const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/selvin-jacob';
  const createItem = function(name, callback) {
    const newItem = {
      name: name
    };
    const strJSON = JSON.stringify(newItem);
    // With ajax()
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: strJSON,
      success: callback
    });
  };
  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };
  const updateItem = function(id, updateData, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback
    });
  };
  return {
    createItem,
    getItems,
    updateItem,
  };
}());