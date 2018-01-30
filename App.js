import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import gridPattern from './grid_pattern.png';

MapboxGL.setAccessToken('your access key');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      route:
        {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "properties": {},
              "geometry": {
                "type": "LineString",
                "coordinates": [
                  [
                    11.953125,
                    39.436192999314095
                  ],
                  [
                    18.896484375,
                    46.37725420510028
                  ]
                ]
              }
            }
          ]
        },
      point: {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.568359375,
            41.04621681452063
          ]
        }
      },
      face: {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {

            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -50.2734375,
                    55.578344672182
                  ],
                  [
                    -53.4375,
                    47.989921667414
                  ],
                  [
                    -42.5390625,
                    47.989921667414
                  ],
                  [
                    -41.484375,
                    55.578344672182
                  ],
                  [
                    -50.2734375,
                    55.578344672182
                  ]
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {

            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -26.71875,
                    54.977613670696
                  ],
                  [
                    -27.7734375,
                    47.517200697839
                  ],
                  [
                    -15.46875,
                    48.458351882809
                  ],
                  [
                    -18.6328125,
                    54.977613670696
                  ],
                  [
                    -26.71875,
                    54.977613670696
                  ]
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {

            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -52.734375,
                    39.095962936306
                  ],
                  [
                    -32.34375,
                    29.840643899834
                  ],
                  [
                    -14.0625,
                    38.822590976177
                  ],
                  [
                    -14.0625,
                    30.448673679288
                  ],
                  [
                    -32.34375,
                    21.943045533438
                  ],
                  [
                    -53.7890625,
                    28.613459424004
                  ],
                  [
                    -52.734375,
                    39.095962936306
                  ]
                ]
              ]
            }
          }
        ]
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          styleURL={MapboxGL.StyleURL.Light}
          zoomLevel={15}
          centerCoordinate={[11.256, 43.770]}
          style={styles.container}>

          <MapboxGL.ShapeSource id='te' shape={MapboxGL.geoUtils.makePoint([11.256, 43.770])}>
            <MapboxGL.CircleLayer id='tes' style={{circleColor: 'red'}}/>
          </MapboxGL.ShapeSource>

          <MapboxGL.ShapeSource id='test' shape={this.state.point}>
            <MapboxGL.CircleLayer id='testc^' style={{circleColor: 'red'}}/>
          </MapboxGL.ShapeSource>

          <MapboxGL.ShapeSource id='smileyFaceSource' shape={this.state.face}>
            <MapboxGL.FillLayer id='smileyFaceFill' style={layerStyles.smileyFace} />
          </MapboxGL.ShapeSource>

          <MapboxGL.ShapeSource id='12' shape={this.state.route}>
            <MapboxGL.LineLayer id='123' style={{lineColor:'red'}} />
          </MapboxGL.ShapeSource>

        </MapboxGL.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const layerStyles = MapboxGL.StyleSheet.create({
  background: {
    backgroundPattern: gridPattern,
  },
  smileyFace: {
    fillAntialias: true,
    fillColor: 'white',
    fillOutlineColor: 'rgba(255, 255, 255, 0.84)',
  },
});