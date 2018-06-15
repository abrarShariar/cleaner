# cleaner

Detect and clean executable files as well as other file types passed as arguments. The cleaner starts from your current directory and recursively cleans until all executable and files of mentioned file types are removed.


## Installation

 `npm install --save cleaner`

## Usage

```sh
$ npm install --save cleaner
$ cleaner .out .o .tsc
```

Notice here I want to remove all `.out`, `.o` and `.tsc` files starting from the current directory and recursively traversing. 

**Note**: All executables will be deleted by defualt.


## Contribuuting

This module is in bare bones state. Something I wrote for myself, if this is of any help to you please feel free to drop a line. PRs are more than welcome :)
