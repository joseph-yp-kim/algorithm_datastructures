/*
Your objective is to add formatting to a plain number to display it as price.
The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51
*/

function numberToPrice(number) {
  if (isNaN(number)) return 'NaN';
  let output = "";
  const nums = number.toString().split(".");
  const nums1 = nums[0].split('').reverse();
  let nums2;
  if (nums[1]) nums2 = nums[1].split('');
  let nums1Count = 0;
  for (let i = 0; i < nums1.length; i += 1) {
    if (nums1Count > 2 && nums1[i] !== '-') {
      output = ',' + output;
      nums1Count = 0;
    }
    output = nums1[i] + output;
    nums1Count += 1;
  }
  output = output + '.';
  if (nums2 === undefined) {
    output = output + '00'
  } else if (nums2.length >= 2) {
    for (let i = 0; i < 2; i += 1) {
      output = output + nums2[i];
    }
  } else if (nums2.length === 1) {
    output = output + nums2[0];
    output = output + '0';
  } else {
    output = output + '00';
  }
  return output;
}

module.exports = numberToPrice;