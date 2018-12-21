import { Trans } from '@lingui/react';

<Trans id="{count, plural, offset:1 =0 {Zero items} few {{count} items} other {<0>A lot of them</0>}}|test" defaults="{count, plural, offset:1 =0 {Zero items} few {{count} items} other {<0>A lot of them</0>}}" values={{
  count: count
}} components={[<a href="/more" />]} />;
<Trans id="msg.plural" defaults="{count, plural, offset:1 =0 {Zero items} few {{count} items} other {<0>A lot of them</0>}}" values={{
  count: count
}} components={[<a href="/more" />]} />;