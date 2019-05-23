(function main() {
  console.log(count([3,2,3,4], 1)); //7
  console.log(count([1,3,9,5], 2)); // 7
  console.log(count([3,2,3,2], 1)); // 5 
  console.log(count([2,2,5,6,9,2,11,9,2,11,12], 1)); //18
}());

function count(nums, k) {
    let i = 0;
    let size = 1;
    let oddCount = 0
    const set = new Set();
    for (let j = 0; j < nums.length;j++){
        //console.log('viewing', nums.slice(i, j+1), oddCount)
        if (nums[j] % 2 === 1) {
            oddCount++;
        }
        if (oddCount <= k) {
            let tmp = i;
            while (j - tmp + 1 >= 1) {
                //console.log('adding', nums.slice(tmp, j+1))
                set.add(String(nums.slice(tmp,j+1)));
                tmp++;
            }
        }
        while (oddCount > k) {
            if (nums[i] % 2 === 1) oddCount--;
            i++;
        }
        let tmp = i;
        while (j - tmp + 1 >= 1) {
            //console.log('adding bot', nums.slice(tmp, j+1))
            set.add(String(nums.slice(tmp, j+1)));
            tmp++;
        }
    }
    while (i < nums.length && oddCount <= k) {
        set.add(String(nums.slice(i, nums.length)))
        i++;
    }
    return set.size;
}


/*
 * alternatively:
 * public static int countSubArray(int[] arr, int k) {
        if (arr != null && arr.length > 0) {
            int oddCount = 0, i = 0, last = -1;
            Set<String> subArray = new HashSet<>();
            StringBuilder sb = new StringBuilder();
            while (i < arr.length) {
                int num = arr[i];
                if (num % 2 == 1) {
                    oddCount++;
                }
                subArray.add(String.valueOf(num));
                while (oddCount > k && last < i) {
                    int pop = arr[++last];
                    if (pop % 2 == 1) {
                        oddCount--;
                    }
                    if (last +1 != i) {
                        sb.replace(0, sb.indexOf(",") + 1, "");
                        subArray.add(sb.toString());
                    } else {
                        sb = new StringBuilder();
                    }
                }

                if (sb.length() > 0) {
                    sb.append(",");
                }
                sb.append(num);
                subArray.add(sb.toString());
                i++;
            }
            while (last < arr.length) {
                last++;
                sb.replace(0, sb.indexOf(",") + 1, "");
                subArray.add(sb.toString());
            }
            return subArray.size();
        }
        return 0;
    }
 *
 */

