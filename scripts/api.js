'use strict';
/* global $*/


const api=(function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/selvin-jacob';
  const createItem = function(name, callback) {
    const newItem = {
      name: name
    };
    JSON.stringify(newItem);
    // With ajax()
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'GET',
      dataType: 'json',
      data: { part: 'snippet' },
      success: (data) => {
        console.log(data)
      }
    });
  }

  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };
  return {
    //createItem,
    getItems,
  };
}());