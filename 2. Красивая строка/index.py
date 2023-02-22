def calculateStringBeauty(replacesCount, stringToBeautify):
  res = 0
  chars = {}
  for char in stringToBeautify:
    if chars.get(char) != None:
      continue
    chars[char] = char
    count = replacesCount
    leftPointer, rightPointer = 0, 0

    while rightPointer <= len(stringToBeautify):
      if len(stringToBeautify) - rightPointer == 0:
        res = max([res, rightPointer - leftPointer])
        break
      if count >= 0:
        if stringToBeautify[rightPointer] == char:
          rightPointer+=1
        else:
          if count > 0:
            rightPointer+=1
          count-=1   
      else:
        res = max([res, rightPointer - leftPointer])
        leftPointer+=1
        if stringToBeautify[leftPointer - 1] == char:
          continue
        else:
          count = 1  
  return res

reader = open('2. Красивая строка/input.txt', 'r')
[replacesCount, stringToBeautify] = reader.read().rstrip().split("\n")
reader.close()

result = calculateStringBeauty(int(replacesCount), stringToBeautify)

writer = open('output.txt', 'w')
writer.write(str(result))
writer.close()