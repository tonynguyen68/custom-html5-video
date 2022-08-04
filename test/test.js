describe('Red Dot', function () {
  describe('Change another video with less than 4s duration', function () {
    it('should not appear', function (done) {
      // https://custom-html5-video.nguyenanhvu.com/index-3s.html
      done();
    });
  });
  describe('Change another video with 4s duration', function () {
    it('should not appear', function (done) {
      // https://custom-html5-video.nguyenanhvu.com/index-4s.html
      done();
    });
  });

  describe('Responsive', function () {
    it('should stay in the right position at the 4-second time point', function (done) {
      // https://custom-html5-video.nguyenanhvu.com/
      // Scale browser or test on many devices
      done();
    });
  });
  describe('Change another video with different duration', function () {
    it('should stay in the right position at the 4-second time point', function (done) {
      // https://custom-html5-video.nguyenanhvu.com/
      // https://custom-html5-video.nguyenanhvu.com/index-40s.html
      done();
    });
  });
});

describe('Thumbnail', function () {
  describe('Change another video with less than 4s duration', function () {
    it('should nerver appear', function (done) {
      // https://custom-html5-video.nguyenanhvu.com/index-3s.html
      done();
    });
  });
  describe('Change another video with 4s duration', function () {
    it('should never appear', function (done) {
      // https://custom-html5-video.nguyenanhvu.com/index-4s.html
      done();
    });
  });
  describe('Change another video with less than 1m 4s duration', function () {
    it('should appear only from 4s to the end of the video', function (done) {
      // https://custom-html5-video.nguyenanhvu.com/index-40s.html
      done();
    });
  });

  describe('Run the video from the begin to the end', function () {
    it('should appear only between 4-64 seconds', function (done) {
      // https://custom-html5-video.nguyenanhvu.com/
      // Click play button to play video
      done();
    });
  });
  describe('User click from 00:00 to 00:03', function () {
    it('should disappear', function (done) {
      // https://custom-html5-video.nguyenanhvu.com/
      // Click to the seek bar to change duration
      done();
    });
  });
  describe('User click from 00:04 to 01:04', function () {
    it('should appear', function (done) {
      // https://custom-html5-video.nguyenanhvu.com/
      // Click to the seek bar to change duration
      done();
    });
  });
  describe('User click after 01:04', function () {
    it('should disappear', function (done) {
      // https://custom-html5-video.nguyenanhvu.com/
      // Click to the seek bar to change duration
      done();
    });
  });
});