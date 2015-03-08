## About
An implementation of the Jaro-Winkler distance algorithm. Provides string similarity scores from 0 (no similarity) to 1 (exact match). 

The Jaro distance implementation is a port of the python project [https://pypi.python.org/pypi/jellyfish](Jellyfish)'s implementation. 

## Examples

```javascript
var JaroWinkler = require('Jaro-Winkler');

JaroWinkler.get("Dwayne", "Duane") // .84
JaroWinkler.get("Martha", "Marhta") // .96
```

## Notes

The prefix length and scaling factor are both set at 4 and .1 respectively. The prefix bonus (better scores for strings that share common early characters is applied in all cases. 