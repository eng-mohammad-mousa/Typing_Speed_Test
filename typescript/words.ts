var words: string[] = [
    'time' , 'year' ,'father' , 'spell' , 'enough' , 'name' , 'hard' , 'always' , 'perhaps' , 'came' , 'story' , 'common' , 'thought' , 'contain' , 'ability' , 'account' , 'analyze' , 'balance' , 'capture' , 'central' , 'certain' , 'chance' , 'channel' , 'college' , 'combine' , 'comfort' , 'command' , 'compare' , 'connect' , 'control' , 'convert' , 'counter' , 'deliver' , 'deserve' , 'destroy' , 'dynamic' , 'educate' , 'emotion' , 'ethical' , 'explore' , 'fortune' , 'frequent' , 'gesture' , 'harmony' , 'healthy' , 'honesty' , 'improve' , 'justify' , 'musical' , 'patient' , 'purpose' , 'realize' , 'recognize' , 'reflect' , 'regular' , 'aspect' , 'asking' , 'basket' , 'bright' , 'choice' , 'circle' , 'design' , 'dinner' , 'driver' , 'easily' , 'effect' , 'energy' , 'famous' , 'flight' , 'garden' , 'gentle' , 'ground' , 'happen' , 'heaven' , 'inside' , 'jacket' , 'junior' , 'kitten' , 'leader' , 'living' , 'master' , 'office' , 'planet' , 'plenty' , 'pretty' , 'prince' , 'proud' , 'runner' , 'shower' , 'silent' , 'simple' ,'or' , 'where' , 'those' , 'increase' , 'both' , 'another' , 'eye' , 'who' , 'again' , 'than' , 'very' , 'head' , 'become' , 'possible' , 'some' , 'however' , 'late' , 'that' , 'because' , 'the' ,'hello' , 'peace' , 'happy' , 'beautiful' , 'success' , 'fun' , 'amazing' , 'strong' , 'kind' , 'brave' , 'creative' , 'passion' , 'inspire' , 'wonderful' , 'fantastic' , 'blessed' , 'joy' , 'happiness' , 'celebrate' , 'adventure' , 'exciting' , 'motivated' , 'dream' , 'achieve' , 'believe' , 'strength' , 'victory' , 'courage' , 'growth' , 'innovation' , 'perseverance' , 'grateful' , 'hope' ,  'spirit' , 'summer' , 'vision' , 'winner' , 'distance' , 'release' , 'replace' , 'respect' , 'sculpt' , 'service' , 'silence' , 'special' , 'stomach' , 'subject' , 'support' , 'suspend' , 'sweater' , 'thrifty' , 'tonight' , 'uncover' , 'venture' , 'volcano' , 'accessible' , 'background' , 'challenge' , 'contribute' , 'dedicated' , 'delicious' , 'difference' , 'education' , 'efficient' , 'engagement' , 'enthusiasm' , 'experience' , 'fascinate' , 'flexible' , 'generation' , 'impressive' , 'leadership' , 'opportunity' , 'passionate' , 'persuade' , 'potential' , 'profession' , 'satisfaction' , 'significant' , 'successful' , 'technology' , 'traditional' , 'understand' , 'university' , 'visualization' , 'celebrity' , 'discussion' , 'recommend' , 'achievement' , 'communication' , 'development' , 'entertainment' , 'information' , 'interesting' , 'performance' , 'professional' , 'registration' , 'relationship' , 'participation' , 'people' , 'way' , 'day' , 'man' , 'government' , 'part' , 'place' , 'case' , 'group' , 'problem' ,  'fact' , 'be' , 'have' , 'do' , 'say' , 'get' , 'make' , 'go' , 'know' , 'take' , 'see' , 'come' , 'think' , 'look' , 'want' , 'give' , 'use' , 'find' , 'tell' , 'ask' , 'work' , 'seem' , 'feel' , 'try' , 'leave' , 'call' , 'good' , 'new' , 'first' , 'last' , 'long' , 'great' , 'little' , 'own' , 'other' , 'old' , 'right' , 'big' , 'high' , 'different' , 'small' , 'world' , 'life' , 'night' , 'school' , 'book' , 'city' , 'country' , 'house' , 'car' , 'family' , 'friend' , 'money' , 'job' , 'love' , 'music' , 'movie' , 'weather' , 'food' , 'water' , 'game' , 'sport' , 'nature' , 'animal' , 'plant' , 'flower' , 'sun' , 'moon' , 'star' , 'sky' , 'rain' , 'snow' , 'fire' , 'ice' , 'wind' , 'cloud' , 'earth' , 'ocean' , 'river' , 'mountain' , 'tree' , 'grass' , 'beach' , 'desert' , 'island' , 'air' , 'color' , 'red' , 'blue' , 'green' , 'yellow' , 'black' , 'white' , 'grey' , 'brown' , 'pink' , 'orange' , 'purple' , 'week' , 'month' , 'morning' , 'evening' , 'noon' , 'midnight' , 'road' , 'bridge' , 'door' , 'window' , 'room' , 'bed' , 'chair' , 'table' , 'phone' , 'computer' , 'internet' , 'play' , 'dance' , 'sing' , 'draw' , 'paint' , 'write' , 'large' , 'next' , 'early' , 'young' , 'important' , 'few' , 'public' , 'bad' , 'same' , 'able' , 'to' , 'of' , 'in' , 'for' , 'on' , 'with' , 'at' , 'by' , 'from' , 'up' , 'about' , 'into' , 'over' , 'after' , 'beyond' , 'under' , 'through' , 'before' , 'between' , 'during' , 'since' , 'one' , 'real' , 'not' , 'set' , 'they' , 'state' , 'consider' , 'and' , 'what' , 'also' , 'point' , 'can' , 'as' , 'while' , 'order' , 'child' , 'thing' , 'never' , 'hold' , 'each' , 'too' , 'program' , 'end' , 'you' , 'home' , 'around' , 'begin' , 'interest' , 'confidence' , 'it' , 'he' , 'this' , 'but' , 'his' , 'we' , 'her' , 'she' , 'an' , 'will' , 'my' , 'all' , 'would' , 'there' , 'their' , 'so' , 'out' , 'if' , 'which' , 'me' , 'when' , 'like' , 'no' , 'just' , 'him' , 'person' , 'your' , 'could' , 'them' , 'then' , 'now' , 'only' , 'its' , 'back' , 'two' , 'how' , 'our' , 'well' , 'even' , 'any' , 'these' , 'most' , 'us' , 'should' , 'am' , 'here' , 'hand' , 'woman' , 'nation' , 'change' , 'form' , 'run' , 'more' , 'open' , 'turn' , 'still' , 'need' , 'line' , 'number' , 'against' , 'course' , 'help' , 'word' , 'down' , 'without' , 'may' , 'such' , 'off' , 'general' , 'much' , 'show' , 'lead' , 'might' , 'system' , 'stand' , 'move' , 'face' , 'plan' , 'mean' , 'present' , 'develop' , 'govern' , 'must' , 'follow' , 'many' , 'let' , 'map' , 'wood' , 'told' , 'care' , 'piece' , 'remember' , 'top' , 'complete' , 'wonder' , 'clear' , 'pass' , 'record' , 'light' , 'example' , 'pull' , 'made' , 'minute' , 'war' , 'thousand' , 'distant' , 'close' , 'men' , 'less' , 'travel' , 'near' , 'rule' , 'front' , 'eat' , 'main' , 'among' , 'nine' , 'field' , 'boat' , 'noun' , 'final' , 'cold' , 'produce' , 'warm' , 'read' , 'behind' , 'power' , 'cover' , 'gave' , 'note' , 'shape' , 'quick' , 'differ' , 'test' , 'live' , 'once' , 'got' , 'song' , 'saw' , 'together' , 'mother' , 'is' , 'four' , 'began' , 'numeral' , 'stay' , 'mind' , 'five' , 'fast' , 'study' , 'until' , 'fill' , 'tail' , 'found' , 'bird' , 'drive' , 'knew' , 'street' , 'self' , 'pose' , 'wait' , 'yes' , 'mile' , 'free' , 'round' , 'ago' , 'ease' , 'decide' , 'object' , 'rock' , 'speed' , 'unit' , 'has' , 'heat' , 'side' , 'were' , 'mark' , 'king' , 'foot' , 'box' , 'force' , 'letter' , 'dry' , 'hot' , 'plane' , 'oh' , 'east' , 'add' , 'sleep' , 'several' , 'farm' , 'eight' , 'girl' , 'fall' , 

    // html element 
    // 'html', 'title', 'body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span', 'img', 'ul', 'ol', 'li', 'nav', 'header', 'footer', 'section', 'article', 'aside', 'input', 'textarea', 'button', 'select', 'option', 'label', 'tr', 'td', 'th', 'thead', 'tbody', 'tfoot', 'link', 'script', 'style', 'meta', 'br', 'hr', 'em', 'i', 'b', 'sup', 'sub', 'cite', 'code', 'u', 'var', 'pre', 'q', 'samp', 'shadow', 'source', 'summary', 'template', 'track', 'video', 'wbr', 'webview', 'xmp', 'doctype', 'abbr', 'acronym', 'address', 'area', 'audio', 'base', 'basefont', 'canvas', 'blockquote', 'iframe', 'object', 'embed', 'param', 'map', 'progress', 'meter', 'fieldset', 'legend', 'datalist', 'optgroup', 'keygen', 'output', 'details', 'mark', 'ruby', 'rt', 'rp', 'svg', 'path', 'circle', 'ellipse', 'polygon', 'polyline', 'rect', 'noscript', 'caption', 'colgroup',

    // css property
    // 'background-color', 'font-size', 'font-family', 'margin', 'padding', 'border', 'display', 'position', 'width', 'height', 'float', 'clear', 'overflow', 'visibility', 'z-index', 'top', 'bottom', 'left', 'text-align', 'text-decoration', 'text-transform', 'text-shadow', 'line-height', 'word-spacing', 'letter-spacing', 'white-space', 'list-style-type', 'list-style-image', 'list-style-position', 'cursor', 'transition', 'transform', 'animation', 'box-shadow', 'border-radius', 'outline', 'background-image', 'background-position', 'background-repeat', 'background-size', 'box-sizing', 'flex-direction', 'flex-wrap', 'align-items', 'justify-content', 'grid-template-columns', 'grid-template-rows', 'opacity', 'filter', 'flex', 'grid', 'justify-items', 'align-content', 'flex-grow', 'flex-shrink', 'flex-basis', 'grid-template-areas', 'grid-template', 'grid-row-start', 'grid-row-end', 'grid-column-start', 'grid-column-end', 'grid-row', 'grid-column', 'align-self', 'justify-self', 'flex-flow', 'gap', 'row-gap', 'column-gap', 'place-content', 'place-items', 'place-self', 'text-overflow', 'word-wrap', 'word-break', 'overflow-wrap', 'hyphens', 'column-count', 'column-fill', 'column-rule', 'column-span', 'column-width', 'columns', 'break-before', 'break-inside', 'break-after', 'text-align-last', 'text-justify', 'text-indent', 'text-rendering', 'text-underline-position', 'transform-origin', 'transform-style', 'transition-delay', 'transition-duration', 'transition-property', 'transition-timing-function', 'unicode-bidi', 'user-select', 'vertical-align', 'widows', 'will-change', 'writing-mode', 'zoom', 'animation-delay', 'animation-direction', 'animation-duration', 'animation-fill-mode', 'animation-iteration-count', 'animation-name', 'animation-play-state', 'animation-timing-function', 'backface-visibility', 'background-attachment', 'background-blend-mode', 'backdrop-filter', 'block-size', 'border-block', 'border-block-color', 'border-block-end', 'border-block-end-color', 'border-block-end-style', 'border-block-end-width', 'border-block-start', 'border-block-start-color', 'border-block-start-style', 'border-block-start-width', 'border-block-style', 'border-block-width', 'border-bottom', 'border-bottom-color', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-bottom-style', 'border-bottom-width', 'border-collapse', 'border-color', 'border-image', 'border-image-outset', 'border-image-repeat', 'border-image-slice', 'border-image-source', 'border-image-width', 'border-inline', 'border-inline-color', 'border-inline-end', 'border-inline-end-color', 'border-inline-end-style', 'border-inline-end-width', 'border-inline-start', 'border-inline-start-color', 'border-inline-start-style', 'border-inline-start-width', 'border-inline-style', 'border-inline-width', 'border-left', 'border-left-color', 'border-left-style', 'border-left-width', 'border-right', 'border-right-color', 'background-clip', 'background-origin', 'border-right-style', 'border-right-width', 'border-spacing', 'border-style', 'border-top', 'border-top-color', 'border-top-left-radius', 'border-top-right-radius', 'border-top-style', 'border-top-width', 'border-width', 'caption-side', 'clip', 'content', 'counter-increment', 'counter-reset', 'direction', 'empty-cells', 'font', 'font-feature-settings', 'font-kerning', 'font-language-override', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'list-style', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'max-height', 'max-width', 'min-height', 'min-width', 'outline-color', 'outline-offset', 'outline-style', 'outline-width', 'overflow-x', 'overflow-y', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'page-break-after', 'page-break-before', 'page-break-inside', 'perspective', 'perspective-origin', 'quotes', 'resize', 'table-layout',
    
    // bootstrap classes
    // 'container', 'container-fluid', 'row', 'col', 'col-1', 'col-2', 'col-3', 'col-4', 'col-5', 'col-6', 'col-7', 'col-8', 'col-9', 'col-10', 'col-11', 'col-12', 'jumbotron', 'jumbotron-fluid', 'alert', 'alert-success', 'alert-info', 'alert-warning', 'alert-danger', 'badge', 'badge-pill', 'breadcrumb', 'breadcrumb-item', 'btn', 'btn-primary', 'btn-secondary', 'btn-success', 'btn-info', 'btn-warning', 'btn-danger', 'btn-link', 'btn-group', 'card', 'card-header', 'card-body', 'card-footer', 'carousel', 'carousel-item', 'dropdown', 'dropdown-menu', 'dropdown-item', 'form-control', 'input-group', 'modal', 'modal-dialog', 'modal-content', 'modal-title', 'modal-body', 'modal-footer', 'list-group', 'list-group-item', 'nav-item', 'nav-link', 'navbar', 'navbar-brand', 'navbar-nav', 'navbar-toggler', 'navbar-collapse', 'pagination', 'page-item', 'page-link', 'progress-bar', 'spinner-border', 'sr-only', 'visually-hidden', 'd-block', 'd-flex', 'd-inline', 'd-inline-block', 'd-none', 'd-sm-none', 'd-md-none', 'd-lg-none', 'd-xl-none', 'd-md-block', 'd-lg-block', 'd-xl-block', 'text-center', 'text-start', 'text-end', 'text-muted', 'text-primary', 'text-secondary', 'text-success', 'text-info', 'text-warning', 'text-danger', 'text-dark', 'text-white', 'text-body', 'text-black-50', 'text-white-50', 'text-wrap', 'text-nowrap', 'text-break', 'text-reset', 'text-lowercase', 'text-uppercase', 'text-capitalize', 'text-left', 'text-right', 'text-truncate', 'text-decoration-none', 'fw-bold', 'fw-normal', 'fw-light', 'fw-lighter', 'fw-bolder', 'fst-italic', 'fst-normal', 'bi', 'fs-1', 'fs-2', 'fs-3', 'fs-4', 'fs-5', 'fs-6', 'fs-7', 'bi-justify', 'bi-justify-left', 'bi-justify-right', 'bi-justify-center', 'bi-text-left', 'bi-text-right', 'bi-text-center', 'bi-text-justify', 'bi-text-nowrap', 'bi-text-wrap', 'bi-text-break', 'bi-text-truncate', 'bi-lowercase', 'bi-uppercase', 'bi-capitalize', 'bi-text-reset', 'bi-text-decoration-none', 'bi-fw-bold', 'bi-fw-normal', 'bi-fw-light', 'bi-fw-lighter', 'bi-fw-bolder',

];
