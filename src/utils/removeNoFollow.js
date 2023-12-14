const removeNoFollows = (string) => {
    const splitString = string.split('<a href')
    const newContent = []
    splitString.forEach(aTag => {
      const removedNoFollows = aTag.includes('onupkeep.com') ? aTag.replace('target="_blank" rel="nofollow noopener noreferrer"', '') : aTag
      const beginingOfATag = '<a href'
      const resolvedATag = removedNoFollows.indexOf('=') === 0 ? beginingOfATag.concat(removedNoFollows) : removedNoFollows
      newContent.push(resolvedATag)
    })
    const combinedNewContent = newContent.join(" ")
    return combinedNewContent
}

export default removeNoFollows