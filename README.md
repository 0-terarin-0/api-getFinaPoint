# Get FINA Point via API

## API Information

### Base URL
```https://api.terarin-iw.net/getFinaPoint```


### Parameters

All of parameters must be added.

| Parameters | Description |
| ---- | ---- |
| ```style``` | Determine the style of match which you want know Fina Point by style ID. For detiles, please see below. |
| ```distance``` | Determine the distance of match which you want know Fina Point. |
| ```gender``` | Determine gender of match which you want know Fina Point. <br> Selections:```male```\/```female```\/```mixed```|
| ```time``` | Please add your time with just using secounds. <br> Example: ```25.93```, ```67.93``` |

### Style ID
| Style | ID |
| ---- | ---- |
| Freestyle | ```01``` |
| Breaststroke | ```02``` |
| Backstroke | ```03``` |
| Butterfly | ```04``` |
| Individual Medley | ```05``` |
| Freestyle Relay | ```06``` |
| Medley Relay | ```07``` |

### Example URL
Let's say you want to know your FINA Point. If you were male, and you had swam 50m with Freestyle by 30.09 sec., the URL to know FINA Point must be like below.

```https://api.terarin-iw.jp/getFinaPoint?distance=50&style=01&gender=male&time=30.09```

## Support
If you have any problem, please send e-mail to below e-mail address, or visit form URL and submit.

E-Mail : [support@srv.terarin-iw.jp](mailto:support@srv.terarin-iw.jp)

Form : [https://forms.gle/zM8dojkSnkU94cxg9](https://forms.gle/zM8dojkSnkU94cxg9)
