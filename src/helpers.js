function choice( items ) {
  let randIdx = Math.floor( Math.random() * items.length );
  return items[ randIdx ];
}

function remove( items, item ) {
  let matchedIdx = items.indexOf( item );
  if ( matchedIdx !== -1 ) {
    return [
      ...items.slice( 0, matchedIdx ),
      ...items.slice( matchedIdx )
    ];
  } else {
    return undefined;
  }
}

export {
  choice,
  remove
};
