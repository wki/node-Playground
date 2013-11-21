node.js Experiment "Temperatur-Sensor"




Events:

  - imperativ (z.B. notify)
  
  - DDD-Style (z.B. AlarmRaised)

  
Serverseitig:

Broadway App (= EventEmitter2)

  - logging (winston)
    $app.emit('log', ...);

  - SMS Notification
      on 'notify'

  - express Web Framework
    * spricht direkt mit App ($app_service)

  - Websocket Handler
    * pro Client Liste beobachteter Sensoren
    * spricht mit App ($app_service)
    * events:
        on 'MeasurementResultReceived'
        on 'AlarmRaised'
        on 'AlarmCleared'
    
  - DDD domain layer + evtl. App
    * App-Service ($service)
        --> Methoden für Use-Cases
    * Subdomain "Measure"
        on 'MeasurementResultReceived' ...
    * Subdomain "Condense"
        on 'MeasurementResultReceived' ...
    * Subdomain "Alarm"
        on 'MeasurementResultReceived' ...
      --> emit 'AlarmRaised' / 'AlarmCleared'
    * Subdomain "Notification"
        on 'AlarmRaised' / 'AlarmCleared'
      --> emit "nofity"

URLs:

  - POST /sensor/:id (measurement-result)
    --> emit 'MeasurementResultReceived'

  - GET /
    --> emit 'SensorListWanted', filter


Erweiterung von Broadway mit Config-Datei

[
    {
        path: './plugin/xxx',
        options: { ... }
    },
    ...
]
