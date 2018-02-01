/* feedreader.js = TESTS
 * Function that runs once DOM is ready
 */
$(function () {
  // First test suite - RSS Feeds
  describe('RSS Feeds', function () {
    it('are defined', function () {
      // Make sure allFeeds variable is defined
      expect(allFeeds).toBeDefined();
      // Make sure length of allFeeds is greater than 0
      expect(allFeeds.length).not.toBe(0);
    });
    // Ensure allFeed's URL's exist
    it('URL is defined', function () {
      // Loop through allFeeds
      allFeeds.forEach(function (menuItem) {
        // Target URL's
        let itemURL = menuItem.url;
        // Make sure URL's are defined
        expect(itemURL).toBeDefined();
        // Make sure length of URL's is greater than 0
        expect(itemURL.length).not.toBe(0);
      });
    });
    // Ensure allFeed's names exist
    it('Name is defined', function () {
      // Loop through allFeeds
      allFeeds.forEach(function (menuItem) {
        // Target names
        let itemName = menuItem.name;
        // Make sure names are defined
        expect(itemName).toBeDefined();
        // Make sure length of names is greater than 0
        expect(itemName.length).not.toBe(0);
      });
    });
  });
  /* TODO: Write a new test suite named "The menu" */
  describe('The Menu', function () {
    // Make sure menu is hidden by default
    it('is hidden by default', function () {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
    // Make sure menu button is working (shows/hides menu on click)
    it('becomes visibile when menu icon is clicked', function () {
      // On menu icon click
      $('.menu-icon-link').trigger('click');
      // Make sure menu-hidden class is removed
      expect($('body').hasClass('menu-hidden')).toBe(false);
    });
    it('changes back to hidden when clicked again', function () {
      // If the menu is clicked again
      $('.menu-icon-link').trigger('click');
      // Make sure menu-hidden class is added back
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });
  /* TODO: Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function () {
    /* Using beforeEach because loadFeed is an async function (returns a promise). This will run before each test
     * Pass done argument to beforeEach. Once test is done we move forward with tests
     */
    beforeEach(function (done) {
      //Call first defined feed in loadFeed
      loadFeed(0, done);
    });
    it('ensures that # of entry elements within .feed container is more than 0 after loadFeed()', function () {
      expect($('.feed .entry').length).toBeGreaterThan(0);
    });
  });
  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function () {
    // Initialize oldContent variable
    let oldContent;
    beforeEach(function(done) {
      window.loadFeed(0, function () {
        // Assign old content variable
        oldContent = $('.feed').html();
        done();
      });
    });
    it('content should update when a new feed is loaded', function (done) {
      // Feed changes
      window.loadFeed(1, function () {
        // Make sure content changes
        expect($('.feed').html).not.toBe(oldContent);
        done();
      });
    });
  });
}());
