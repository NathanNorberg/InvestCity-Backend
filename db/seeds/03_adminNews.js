
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('adminNews').del()
    .then(function () {
      // Inserts seed entries
      return knex('adminNews').insert([
        {newsTitle: 'What is New', newsBody: 'InvestCity is a very straight forward system and is designed for ease of use. Selecting the icon in the top left will display a side navigation bar with all key routes. All "Manage" options will display all information of the corresponding category i.e. News, Investments, and Investors while the "Add" option will direct the user to forms of the corresponding category. Users can sort how Investments and Investors are displayed as well as how many at a time and easily pinpoint desired information using the search bar.'},
        {newsTitle: 'InvestCity', newsBody: 'InvestCity was created in collaboration with Cowley Norberg Investments (CNI) to track investment projects. It also allows investors to see the ROI of each sold investment as well as receive updates on current investments. InvestCity gives the companies and investors a one stop site to be able to create new investment projects, edit them, add users (investors), view all past and current investments as well as produce reports on all investments they have made.'},
        {newsTitle: 'Big Changes Coming', newsBody: 'Stay Tuned for more information.'},
      ]);
    });
};
